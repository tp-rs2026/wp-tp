"""Local dev server with clean URL support (mimics GitHub Pages)."""
import http.server
import os

ROOT = os.path.dirname(os.path.abspath(__file__))

class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def do_GET(self):
        # Strip query string for file lookup
        path = self.path.split('?')[0]

        # If path has no extension and isn't root, try .html
        if path != '/' and '.' not in os.path.basename(path):
            html_path = os.path.join(ROOT, path.lstrip('/') + '.html')
            if os.path.isfile(html_path):
                self.path = path + '.html'

        return super().do_GET()

if __name__ == '__main__':
    server = http.server.HTTPServer(('', 8080), CleanURLHandler)
    print('Serving at http://localhost:8080')
    server.serve_forever()
