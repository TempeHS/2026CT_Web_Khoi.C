from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/index.html')
@app.route('/')
def index():
    card_data = (
        ("About Laptops", "Learn about the features laptops", "Learn More", "static/images/Stuff/1.png", "about_laptops.html"),
        ("About Desktops", "Learn about the features desktops", "Learn More", "static/images/Stuff/2.png", "about_desktops.html"),
        ("Quality Laptops", "Find example laptops", "Learn More", "static/images/Stuff/3.png", "find_laptops.html"),
        ("Quality Desktops", "Find example desktops", "Learn More", "static/images/Stuff/4.png", "find_laptops.html"),
        ("Which Is Better (For Students)", "Determine which is better for school", "Learn More", "static/images/Stuff/5.png", "compare_student.html"),
        ("Which Is Better (For Employees)", "Determine which is better for the workplace", "Learn More", "static/images/Stuff/6.png", "compare_employee.html"),
    )
    return render_template("index.html", cards = card_data), 200

@app.route('/contact.html')
def contact():
    return render_template("contact.html"), 200

@app.route('/login.html')
def login():
    return render_template("login.html"), 200

@app.route('/signup.html')
def signup():
    return render_template("signup.html"), 200

@app.route('/pricing.html')
def pricing():
    return render_template("pricing.html"), 200

@app.route('/about_laptops.html')
def about_laptops():
    return render_template("about_laptops.html"), 200

@app.route('/about_desktops.html')
def about_desktops():
    return render_template("about_desktops.html"), 200

@app.route('/find_laptops.html')
def find_laptops():
    return render_template("find_laptops.html"), 200

@app.route('/find_desktops.html')
def find_desktops():
    return render_template("find_desktops.html"), 200

@app.route('/compare_student.html')
def compare_student():
    return render_template("compare_student.html"), 200

@app.route('/compare_employee.html')
def compare_employee():
    return render_template("compare_employee.html"), 200

if __name__ == '__main__':
    app.run(debug=True)