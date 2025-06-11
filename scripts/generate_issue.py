#!/usr/bin/env python3
import json
import os
import pathlib
import random
import subprocess

from google import genai

notes_dir = pathlib.Path("src")
notes = [
    p
    for p in notes_dir.rglob("*.md")
    if p.name not in {"SUMMARY.md", "README.md"}
]

if not notes:
    print("No notes found under 'src/'")
    raise SystemExit(0)

note_path = random.choice(notes)
note_text = note_path.read_text(encoding="utf-8")

system_prompt = (
    "あなたはコンピュータサイエンスの講義ノートをレビューする有能なアシスタントです。\n"
    "以下のノートを読み、次のいずれか 1 つについて **日本語** で助言を行い、"
    '必ず JSON 形式 {"title": "...", "body": "..."} で出力してください。\n'
    "1. 誤りの訂正と参考文献を示す\n"
    "2. 次に学ぶべきトピックを提案する\n"
    "3. 現在の範囲を超えた発展的な資料を紹介する"
)

user_prompt = f"Note path: {note_path}\n\n{note_text}"

client = genai.Client(api_key=os.environ["AI_STUDIO_API_KEY"])

response = client.models.generate_content(
    model="gemini-2.5-flash-preview",
    contents=[
        {"role": "system", "parts": system_prompt},
        {"role": "user", "parts": user_prompt},
    ],
    generation_config={"temperature": 0.5},
)

issue_json = json.loads(response.text.strip())

subprocess.run(
    [
        "gh",
        "issue",
        "create",
        "--title",
        issue_json["title"],
        "--body",
        issue_json["body"],
    ],
    check=True,
)

