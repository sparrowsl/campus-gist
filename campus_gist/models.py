from datetime import datetime

from campus_gist import db


class Student(db.Model):
    __tablename__ = "students"
    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(20), nullable=False)
    username = db.Column(db.String(15), unique=True, nullable=False)
    email = db.Column(db.String(75), unique=True, nullable=False, default="")
    profile_picture = db.Column(db.String(20), nullable=False,
                                default="default.jpg")
    password = db.Column(db.String(256), nullable=False)

    gists = db.relationship("Gist", backref="student", lazy=True)
    comments = db.relationship("Comment", backref="student", lazy=True)

    def __repr__(self):
        return f"<Student('{self.name}', '{self.username}')>"


class Gist(db.Model):
    __tablename__ = "gists"
    id = db.Column(db.Integer, primary_key=True)
    gist_title = db.Column(db.String(30), unique=True, nullable=False)
    gist_content = db.Column(db.Text, nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False,
                                default=datetime.utcnow)

    student_id = db.Column(db.Integer, db.ForeignKey("students.id"))
    comments = db.relationship("Comment", backref="gist", lazy=True)

    def __repr__(self):
        return f"<Gist('{self.gist_title}')>"


class Comment(db.Model):
    __tablename__ = "comments"
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.Text, nullable=False)
    date_commented = db.Column(db.DateTime, nullable=False,
                                default=datetime.utcnow)

    student_id = db.Column(db.Integer, db.ForeignKey("students.id"))
    gist_id = db.Column(db.Integer, db.ForeignKey("gists.id"))

    def __repr__(self):
        return f"<Comment('{self.comment}')>"
