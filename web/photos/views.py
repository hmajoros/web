from flask import render_template, Blueprint

photos = Blueprint('photos', __name__)

@photos.route('/photos')
def view_photos():
  return render_template('photos.html', title = 'photos')
