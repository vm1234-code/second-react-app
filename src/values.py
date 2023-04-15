#!/usr/bin/python3



import requests

url = 'file:///path/to/your/local/file.html'
response = requests.get(url)

if response.status_code == 200:
    html = response.text
    print(html)
else:
    print(f'Request failed with status code {response.status_code}')

