from flask import Flask
from flask.ext.mysql import MySQL
from dotenv import load_dotenv
from os.path import join, dirname

import os

# from flask.ext.compress import Compress

app = Flask(__name__)

# dotenv shit
dotenv_path = join(dirname(dirname(__file__)), '.env')
load_dotenv(dotenv_path)

# db setup shit 
app.mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = os.environ.get('DB_USER')
app.config['MYSQL_DATABASE_PASSWORD'] = os.environ.get('DB_PASS')
app.config['MYSQL_DATABASE_DB'] = os.environ.get('DB_NAME')
app.config['MYSQL_DATABASE_HOST'] = os.environ.get('DB_HOST')
app.mysql.init_app(app)

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

# from web.contact.views import contact
# app.register_blueprint(contact)

from web.legacy.views import legacy 
app.register_blueprint(legacy)

