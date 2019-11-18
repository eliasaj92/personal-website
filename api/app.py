from flask import Flask, send_from_directory
app = Flask(__name__, static_folder='../react-app/build/')


@app.route("/static/<path:path>")
def send_js(path):
    return app.send_static_file("static/"+path)

@app.route("/favicon.ico")
def favicon():
  return app.send_static_file('favicon.ico')

@app.route("/logo192.png")
def logo192():
  return app.send_static_file('logo192.png')

@app.route("/")
def hello():
  return app.send_static_file('index.html')

if __name__ == "__main__":
  app.run()
