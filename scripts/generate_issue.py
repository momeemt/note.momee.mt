#!/usr/bin/env python3
import os
import random
import json
import pathlib
import subprocess
import openai

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

openai.api_key = os.environ['OPENAI_API_KEY']
response = openai.ChatCompletion.create(
    model=payload['model'],
    messages=payload['messages'],
    temperature=payload['temperature'],
)
message = response['choices'][0]['message']['content']


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
