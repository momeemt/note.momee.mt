#!/usr/bin/env python3
import os
import random
import json
import pathlib
import subprocess
import urllib.request
import urllib.error

# Collect all markdown notes under src except SUMMARY.md and README.md
notes = [p for p in pathlib.Path('src').rglob('*.md')
         if p.name not in ('SUMMARY.md', 'README.md')]

if not notes:
    print('No notes found')
    exit(0)

note = random.choice(notes)
content = note.read_text()

system_message = (
    'You are a helpful assistant who reviews lecture notes in computer '
    'science. From the provided note, produce advice in Japanese about one '
    'of the following: correcting mistakes with references, suggesting next '
    'topics to study, or providing advanced materials beyond the current '
    'scope. Respond in JSON with "title" and "body" fields.'
)
user_message = f'Note path: {note}\n\n{content}'

payload = {
    'model': os.getenv('OPENAI_MODEL', 'gpt-4o'),
    'messages': [
        {'role': 'system', 'content': system_message},
        {'role': 'user', 'content': user_message}
    ],
    'temperature': 0.5
}

api_key = os.environ['OPENAI_API_KEY']
req = urllib.request.Request(
    'https://api.openai.com/v1/chat/completions',
    data=json.dumps(payload).encode(),
    headers={
        'Authorization': f'Bearer {api_key}',
        'Content-Type': 'application/json'
    },
    method='POST'
)

with urllib.request.urlopen(req, timeout=60) as resp:
    resp_body = resp.read()
message = json.loads(resp_body)['choices'][0]['message']['content']


issue = json.loads(message)

subprocess.run(
    [
        'gh',
        'issue',
        'create',
        '--title',
        issue['title'],
        '--body',
        issue['body'],
    ],
    check=True,
)
