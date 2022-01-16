from datetime import datetime

from campus_gist import db, bcrypt


class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(20), nullable=False)
    username = db.Column(db.String(15), unique=True, nullable=False)
    email = db.Column(db.String(75), unique=True, nullable=False, default="")
    bio = db.Column(db.Text, default="A normal student.")
    profile_picture = db.Column(db.String(20), nullable=False,
                                default="default.jpg")
    password = db.Column(db.String(256), nullable=False)
    joined_on = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    institutions = db.Column(db.String(200), unique=True, nullable=False)

    gists = db.relationship("Gist", backref="student", lazy=True)
    comments = db.relationship("Comment", backref="student", lazy=True)

    def __repr__(self):
        return f"<Student: ('{self.name}', '{self.username}')>"

    def set_password(self, password):
        self.password = bcrypt.generate_password_hash(password)

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password, password)


class Gist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    gist_title = db.Column(db.String(30), unique=True, nullable=False)
    gist_content = db.Column(db.Text, nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False,
                                default=datetime.utcnow)

    student_id = db.Column(db.Integer, db.ForeignKey("student.id"))
    comments = db.relationship("Comment", backref="gist", lazy=True)

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

#     student_id = db.relationship("Student", backref="institution", lazy=True)

#     def __repr__(self):
#         return f"<Institution('{self.name}', '{self.abbreviation}')>"
