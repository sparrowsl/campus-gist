from datetime import datetime
from hashlib import md5

from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

from campus_gist import db, bcrypt, login_manager


@login_manager.user_loader
def load_user(id):
    return Student.query.get(int(id))

class Student(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(20), nullable=False)
    username = db.Column(db.String(15), unique=True, nullable=False)
    email = db.Column(db.String(75), unique=True, default="john@mail.com")
    bio = db.Column(db.Text)
    profile_picture = db.Column(db.String(20))
    password = db.Column(db.String(256), nullable=False)
    joined_on = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    institutions = db.Column(db.String(200), unique=True, nullable=False)

    gists = db.relationship("Gist", backref="student", lazy="dynamic")
    comments = db.relationship("Comment", backref="student", lazy="dynamic")

    def __repr__(self):
        return f"<Student: ('{self.fullname}', '{self.username}')>"

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def profile_avatar(self, size=80):
        gravatar_url = 'https://www.gravatar.com/avatar'
        digest = md5(self.email.lower().encode('utf-8')).hexdigest()
        return f'{gravatar_url}/{digest}?d=identicon&s={size}'

# self-referential relationship for the Users
followers = db.Table("followers",
    db.Column("follower_id", db.Integer, db.ForeignKey("student.id")),
    db.Column("followed_id", db.Integer, db.ForeignKey("student.id")),
)


class Gist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    gist_title = db.Column(db.String(30), unique=True, nullable=False)
    gist_content = db.Column(db.Text, nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False,
                                default=datetime.utcnow)

    student_id = db.Column(db.Integer, db.ForeignKey("student.id"))
    comments = db.relationship("Comment", backref="gist", lazy="dynamic")

    def __repr__(self):
        return f"<Gist: ('{self.gist_title}')>"


class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.Text, nullable=False)
    date_commented = db.Column(db.DateTime, nullable=False,
                                default=datetime.utcnow)

    student_id = db.Column(db.Integer, db.ForeignKey("student.id"))
    gist_id = db.Column(db.Integer, db.ForeignKey("gist.id"))

    def __repr__(self):
        return f"<Comment: ('{self.comment}')>"


# class Institution(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(250), nullable=False, unique=True)
#     abbreviation = db.Column(db.String(15), default="N/A")

#     student_id = db.relationship("Student", backref="institution", lazy="dynamic")

#     def __repr__(self):
#         return f"<Institution('{self.name}', '{self.abbreviation}')>"
