import os

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
# from flask_login import LoginManager
from dotenv import load_dotenv


load_dotenv()

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///gist.db"

# Initialize the extensions
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
"""
login_manager = LoginManager(app)
# redirect un-authenticated users to login page
login_manager.login_view = "login_page"
login_manager.login_message = "Please log in to access that page."
login_manager.login_message_category = "primary"
"""

from campus_gist import routes
