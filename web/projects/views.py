from flask import render_template, Blueprint
import os, psycopg2, urlparse

class Project():
  def __init__(self, proj_id=None, title=None, subtitle=None, description=None, codeURL=None):
    self.proj_id = proj_id
    self.title = title
    self.subtitle = subtitle
    self.description = description
    self.codeURL = codeURL
    self.tech = []
    
urlparse.uses_netloc.append("postgres")
url = urlparse.urlparse(os.environ["DATABASE_URL"])

conn = psycopg2.connect(
    database=url.path[1:],
    user=url.username,
    password=url.password,
    host=url.hostname,
    port=url.port
)
cur = conn.cursor()
cur.execute("""SELECT * FROM projects""")
rows = cur.fetchall()

# setup list of projects to display
projectList = []

for row in rows:
  proj = Project(row[0], row[1], row[2], row[3], row[4])

  cur.execute('SELECT * FROM projects_tech WHERE id = ' + str(row[0]))
  rowsTech = cur.fetchall()

  # get all technologies used for this project
  for tech in rowsTech:
    proj.tech.append(tech[1])

  projectList.append(proj)

# close out our cursor and db connection
cur.close()
conn.close()

# setup blueprint
projects = Blueprint('projects', __name__)

@projects.route('/projects')
def view_projects():
  return render_template('projects.html', title = 'projects', projects = projectList)

