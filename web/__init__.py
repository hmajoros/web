from flask import Flask
# from flask.ext.compress import Compress
import os

app = Flask(__name__)


# compress = Compress()
# 
# def start_app():
#     app = Flask(__name__)
#     compress.init_app(app)
#     return app
# 
# app = start_app()

# from web import views

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

