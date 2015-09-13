from flask import render_template
from web import app 
import glob, os, random

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

@app.route('/projects')
def projects():
    return render_template('projects.html', title = 'projects')

@app.route('/photos')
def photos():
    os.chdir(os.path.dirname(os.path.dirname(__file__)))
    os.chdir('web/static/images/gallery')
    gallery = []
    for file in glob.glob('*.jpg'):
      gallery.append(file)
    random.shuffle(gallery)
    return render_template('photos.html', title = 'photos', photos = gallery) 

@app.route('/contact')
def contact():
    return render_template('contact.html', title = 'contact')

@app.route('/legacy')
def legacy():
    return render_template('legacy.html', title = 'legacy')
