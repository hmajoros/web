from flask import render_template, Blueprint
import glob, os, random

photos = Blueprint('photos', __name__)

@photos.route('/photos')
def view_photos():
  # get images from directory
  os.chdir(os.path.dirname(os.path.dirname(__file__)))
  print os.getcwd()
  os.chdir('static/images/gallery')
  gallery = []
  for file in glob.glob('*.jpg'):
    gallery.append(file)

  # shuffle images so the page is different on each reload
  random.shuffle(gallery)
  
  return render_template('photos.html', title = 'photos', photos = gallery)
