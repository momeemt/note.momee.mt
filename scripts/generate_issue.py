#!/usr/bin/env python3
#!/usr/bin/env python3
import json, os, pathlib, random, subprocess
from google import genai
from google.genai import types

notes = [p for p in pathlib.Path("src").rglob("*.md") if p.name not in {"SUMMARY.md", "README.md"}]
if not notes:
    raise SystemExit("No notes found")

note_path = random.choice(notes)
note_text = note_path.read_text(encoding="utf-8")

client = genai.Client(api_key=os.environ["AI_STUDIO_API_KEY"])

system_instr = (
    "あなたはコンピュータサイエンスの講義ノートをレビューする有能なアシスタントです。"
    "以下のノートを読み、次のいずれか 1 つについて日本語で助言を行い、"
    'JSON 形式 {"title": "...", "body": "..."} で出力してください。'
    "1. 誤りの訂正と参考文献 2. 次に学ぶべきトピック 3. 発展的な資料の紹介"
)

prompt = f"Note path: {note_path}\n\n{note_text}"

response = client.models.generate_content(
    model="gemini-2.5-flash-preview-05-20",
    contents=[prompt],
    config=types.GenerateContentConfig(
        system_instruction=system_instr,
        temperature=0.5,
    ),
)

issue = json.loads(response.text.strip())

subprocess.run(
    ["gh", "issue", "create", "--title", issue["title"], "--body", issue["body"]],
    check=True,
)

