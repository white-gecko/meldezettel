from http.server import HTTPServer, BaseHTTPRequestHandler
from cgi import FieldStorage
from printService import renderPDF
from io import BytesIO


class CORSRequestHandler (BaseHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        BaseHTTPRequestHandler.end_headers(self)


class S(CORSRequestHandler):
    def do_POST(self):
        try:
            content = FieldStorage(
                fp=self.rfile,
                headers=self.headers,
                environ={
                    'REQUEST_METHOD': 'POST',
                    'CONTENT_TYPE': self.headers['content-type'],
                }
            )
            pdf = renderPDF(content.getvalue('data'))
        except Error:
            self.send_response(400)
            self.end_headers()
            return

        self.send_response(200)
        self.end_headers()
        response = BytesIO()
        response.write(pdf)
        self.wfile.write(response.getvalue())


if __name__ == '__main__':
    httpd = HTTPServer(('localhost', 5001), S)
    httpd.serve_forever()
