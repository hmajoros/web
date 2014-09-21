from flask import Flask
from flask.ext.compress import Compress

app = Flask(__name__)
Compress(app)

from web import views
