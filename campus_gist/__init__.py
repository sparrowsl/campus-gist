import os
# import logging
# from logging.handlers import SMTPHandler

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_migrate import Migrate

from config import Config


# if not app.debug:
#     if app.config["MAIL_SERVER"]:
#         auth = None
#         if app.config["MAIL_SERVER"] or app.config["MAIL_PASSWORD"]:
#             auth =(app.config["MAIL_USERNAME"], app.config["MAIL_PASSWORD"])
#         secure = None
#         if app.config['MAIL_USE_TLS']:
#             secure = ()
#         mail_handler = SMTPHandler(
#             mailhost=(app.config['MAIL_SERVER'], app.config['MAIL_PORT']),
#             fromaddr='no-reply@' + app.config['MAIL_SERVER'],
#             toaddrs=app.config['ADMINS'], subject='Campus Gist Failure',
#             credentials=auth, secure=secure)
#         mail_handler.setLevel(logging.ERROR)
#         app.logger.addHandler(mail_handler)


app = Flask(__name__)
app.config.from_object(Config)

# Initialize the extensions
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
migrate = Migrate(app, db)
# redirect un-authenticated users to login page
login_manager.login_view = "login_page"


from campus_gist import routes, models, errors
