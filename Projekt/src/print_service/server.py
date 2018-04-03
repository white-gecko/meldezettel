from http.server import HTTPServer, BaseHTTPRequestHandler
from cgi import FieldStorage
from printService import renderPDF
from io import BytesIO


class S(BaseHTTPRequestHandler):
    def do_POST(self):

        try:
            content = FieldStorage(
                fp=self.rfile,
                headers=self.headers,
                environ={'REQUEST_METHOD': 'POST',
                    'CONTENT_TYPE': self.headers['content-type'],
                }
            ) 
            pdf=renderPDF(content.getvalue('data'))
        except:
            self.send_response(400)
            self.end_headers()
            return

        self.send_response(200)
        self.end_headers()
        response = BytesIO()
        response.write(pdf)
        self.wfile.write(response.getvalue())


if __name__ == '__main__':
    # renderPDF('form.json')
    httpd = HTTPServer(('localhost', 8000), S)
    httpd.serve_forever()
