import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    SECRET_KEY = os.getenv("SECRET_KEY") or "secret-key-here"
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL", "").replace("postgres://", "postgresql://") or \
            'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # MAIL_SERVER = os.getenv("MAIL_SERVER")
    # MAIL_PORT = int(os.getenv("MAIL_PORT") or 25)
    # MAIL_USE_TLS = os.getenv("MAIL_USE_TLS")
    # MAIL_USERNAME = os.getenv("MAIL_USERNAME")
    # MAIL_PASSWORD = os.getenv("MAIL_PASSWORD")
    # ADMINS = ["marvelousbend@gmail.com"]
