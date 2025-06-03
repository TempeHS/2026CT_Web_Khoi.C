from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/index.html')
@app.route('/')
def index():
    card_data = (
        ("Features Of Laptops", "Learn about the features laptops have to offer", "Learn More", "static/images/Stuff/1.png"),
        ("Features Of Desktops", "Learn about the features desktops have to offer", "Learn More", "static/images/Stuff/2.png"),
        ("Examples Of Laptops", "Find example laptops", "Learn More", "static/images/Stuff/3.png"),
        ("Examples Of Desktops", "Find example desktops", "Learn More", "static/images/Stuff/4.png"),
        ("Which Is Better (For Students)", "Determine which is better for school", "Learn More", "static/images/Stuff/5.png"),
        ("Which Is Better (For Students)", "Determine which is better for the workplace", "Learn More", "static/images/Stuff/6.png"),
    )
    return render_template("index.html", cards = card_data), 200

@app.route('/contact.html')
def contact():
    return render_template("contact.html"), 200

if __name__ == '__main__':
    app.run(debug=True)