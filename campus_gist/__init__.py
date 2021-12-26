import os

from flask import Flask
from flask_mail import Mail


app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY") or "secret_key"
# Email Configuration
app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = 1
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME') or "marvelousbend@gmail.com"
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD') or "marve!0us"
# app.config['MAIL_DEFAULT_SENDER'] = 'Default Sender'

mail = Mail(app)


from send_a_mail import routes
