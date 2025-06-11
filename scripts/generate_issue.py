#!/usr/bin/env python3
import json, os, pathlib, random, re, subprocess
from google import genai
from google.genai import types

notes = [p for p in pathlib.Path("src").rglob("*.md")
         if p.name not in {"SUMMARY.md", "README.md"}]
if not notes:
    raise SystemExit("No notes found")

note_file = random.choice(notes)
note_text = note_file.read_text(encoding="utf-8")
note_path = str(note_file)

model_name = os.getenv("GEMINI_MODEL", "gemini-2.0-flash")
client = genai.Client(api_key=os.environ["AI_STUDIO_API_KEY"])

system_instr = (
    "あなたはコンピュータサイエンスの講義ノートをレビューする有能なアシスタントです。"
    "必ず JSON だけを返してください（前後に説明やコードブロックを付けない）。"
    'フォーマット: {"title": "...", "body": "..."} '
    "1. 誤り訂正と参考文献 2. 次に学ぶトピック 3. 発展資料紹介 のいずれか 1 つを選ぶ。"
)

resp = client.models.generate_content(
    model=model_name,
    contents=[f"Note path: {note_path}\n\n{note_text}"],
    config=types.GenerateContentConfig(
        system_instruction=system_instr,
        temperature=0.5,
        max_output_tokens=512,
    ),
)

issue = json.loads(resp.text.strip())

subprocess.run(
    ["gh", "issue", "create", "--title", issue["title"], "--body", issue["body"]],
    check=True,
)

