from flask import render_template, Blueprint

projects = Blueprint('projects', __name__)

@projects.route('/projects')
def view_projects():
  return render_template('projects.html', title = 'projects')
