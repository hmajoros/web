from flask import Flask
# from flask.ext.compress import Compress


app = Flask(__name__)

# compress = Compress()
# 
# def start_app():
#     app = Flask(__name__)
#     compress.init_app(app)
#     return app
# 
# app = start_app()

from web import views
