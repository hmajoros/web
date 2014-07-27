from web import app 

@app.route('/')
@app.route('/index')
def index():
    return 'hello world!'
