from flask import Flask
app = Flask(__name__)

# setup blueprints for each page
from web.home.views import home
app.register_blueprint(home)

from web.about.views import about
app.register_blueprint(about)

from web.work.views import work 
app.register_blueprint(work)

from web.projects.views import projects 
app.register_blueprint(projects)

from web.photos.views import photos 
app.register_blueprint(photos)

from web.contact.views import contact
app.register_blueprint(contact)

from web.legacy.views import legacy 
app.register_blueprint(legacy)

if __name__ == "__main__":
    app.run(host='0.0.0.0')
