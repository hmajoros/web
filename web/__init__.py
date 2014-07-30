from flask import Flask

app = Flask(__name__)
from flaskext.lesscss import lesscss
lesscss(app)

from web import views
