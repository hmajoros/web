from flask import render_template, Blueprint

work = Blueprint('work', __name__)

@work.route('/work')
def view_work():
  return render_template('work.html', title = 'work')
