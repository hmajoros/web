from flask import render_template, Blueprint

legacy = Blueprint('legacy', __name__)

@legacy.route('/legacy')
def view_legacy():
  return render_template('legacy.html', title = 'home')
