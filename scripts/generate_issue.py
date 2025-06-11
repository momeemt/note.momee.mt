#!/usr/bin/env python3
import json, os, pathlib, random, re, subprocess
from google import genai
from google.genai import types

notes = [p for p in pathlib.Path("src").rglob("*.md")
         if p.name not in {"SUMMARY.md", "README.md"}]
if not notes:
    raise SystemExit("No notes found")

note_file  = random.choice(notes)
note_text  = note_file.read_text(encoding="utf-8")
note_path  = str(note_file)

model_name = os.getenv("GEMINI_MODEL", "gemini-2.5-flash-preview-05-20")
client     = genai.Client(api_key=os.environ["AI_STUDIO_API_KEY"])

system_instr = (
    "あなたはコンピュータサイエンスの講義ノートをレビューする有能なアシスタントです。"
    "必ず JSON だけを返してください（前後に説明やコードブロックを付けない）。\n"
    'フォーマット: {"title": "...", "body": "..."}\n'
    "1. 誤りの訂正と参考文献  2. 次に学ぶべきトピック  3. 発展的な資料紹介 のいずれか 1 つを選んで助言する。"
)

prompt = f"Note path: {note_path}\n\n{note_text}"

resp = client.models.generate_content(
    model=model_name,
    contents=[prompt],
    config=types.GenerateContentConfig(
        system_instruction=system_instr,
        temperature=0.5,
        max_output_tokens=512,
    ),
)

raw = resp.text.strip()

match = re.search(r"\{.*\}", raw, re.S)
if not match:
    raise RuntimeError(f"JSON not found in model output:\n{raw}")

issue = json.loads(match.group(0))

subprocess.run(
    ["gh", "issue", "create", "--title", issue["title"], "--body", issue["body"]],
    check=True,
)

