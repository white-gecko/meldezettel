from urllib.parse import urlencode
from urllib.request import Request, urlopen
import json

# url = 'http://192.168.2.101:5001/'
url = 'http://localhost:5001/'

with open('formData.json') as f:
    formdata = json.load(f)


post_fields = {'data': json.dumps(formdata)}
request = Request(url, urlencode(post_fields).encode())
response = urlopen(request).read()

with open('response.pdf', 'wb') as f:
    f.write(response)
