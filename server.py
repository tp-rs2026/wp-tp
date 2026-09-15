import http.server
import os
import sys

class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        path = self.translate_path(self.path)
        # If path doesn't exist and has no extension, try adding .html
        if not os.path.exists(path) and not os.path.splitext(self.path)[1]:
            html_path = path + '.html'
            if os.path.exists(html_path):
                self.path = self.path + '.html'
        super().do_GET()

if __name__ == '__main__':
    port = int(os.environ.get('PORT') or (sys.argv[1] if len(sys.argv) > 1 else 8000))
    server = http.server.HTTPServer(('', port), CleanURLHandler)
    print(f'Serving on http://localhost:{port}')
    server.serve_forever()
