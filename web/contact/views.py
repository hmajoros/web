from flask import render_template, Blueprint, request, redirect, url_for
import sendgrid
import os
import urlparse

contact = Blueprint('contact', __name__)

@contact.route('/contact')
def view_contact():
  submitted = request.args.get('submitted')
  return render_template('contact.html', title = 'contact', submitSuccess = submitted)

@contact.route('/contact-submit', methods=['POST'])
def submit_form():
  name = request.form['name']
  email = request.form['email']
  body = request.form['message']

  body.replace("'", "\\'")
  body.replace('"', '\\"')

  sg = sendgrid.SendGridClient(os.environ['SG_USER'], os.environ['SG_PASS'])
  
  message = sendgrid.Mail()
  message.add_to('majoros.henry@gmail.com')
  message.set_subject('[WEBSITE INQUIRY] - ' + name)
  message.set_from(email)
  message.set_from_name(name)
  message.set_text(body)

  status, msg = sg.send(message)

  return redirect('/contact?submitted=1')
