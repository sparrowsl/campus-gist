import os

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager

from config import Config


app = Flask(__name__)
app.config.from_object(Config)

# Initialize the extensions
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
# redirect un-authenticated users to login page
login_manager.login_view = "login_page"

from campus_gist import routes, models
