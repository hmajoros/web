from flask import render_template
from web import app 

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title = 'home')

@app.route('/about')
def about():
    return render_template('about.html', title = 'about')

@app.route('/work')
def work():
    return render_template('work.html', title = 'work')

@app.route('/legacy')
def legacy():
    return render_template('legacy.html', title = 'legacy')
