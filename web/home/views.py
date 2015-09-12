from flask import render_template, Blueprint

home = Blueprint('home', __name__)

@home.route('/')
def view_home():
  return render_template('index.html', title = 'home')
