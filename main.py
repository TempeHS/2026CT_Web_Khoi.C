from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/index.html')
@app.route('/')
def index():
    card_data = (
        ("Features Of Laptops", "Learn about the features laptops have to offer", "URL", "static/images/image-url"),
        ("Features Of Desktops", "Learn about the features desktops have to offer", "URL", "static/images/image-url"),
        ("Examples Of Laptps", "Find example laptops", "URL", "static/images/image-url"),
    )
    return render_template("index.html", cards = card_data), 200

if __name__ == '__main__':
    app.run(debug=True)