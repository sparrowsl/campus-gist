from flask_wtf import FlaskForm
from wtforms import (StringField, PasswordField, SubmitField, TextAreaField,
                     SelectField, BooleanField)
from wtforms.validators import (DataRequired, Length, Email, ValidationError,
                                EqualTo)

from campus_gist.models import Student


institutes = [
    ("BCC", "BlueCrest College"),
    ("FBC", "Fourah Bay College"),
    ("IPAM", "Institute of Public Administration and Management"),
    ("Njala", "Njala University"),
    ("CODE", "College of Digital Excellence"),
    ("CCMT", "Canadian College of Modern Technology"),
    ("CAT", "College of Agriculture and Technology"),
    ("ACOSAT", "American College of Science and Technology"),
    ("COBIT", "College of Business and Information and Technology"),
    ("other", "Other"),
]

class RegistrationForm(FlaskForm):
    fullname = StringField("Full Name", validators=[DataRequired()])
    username = StringField("Username", validators=[DataRequired(),
                           Length(2, 20)])
    email = StringField("Email Address", validators=[Email()])
    instututions = SelectField("Institution", choices=institutes)
    password = PasswordField("Password", validators=[DataRequired(), Length(4)])
    confirm_password = PasswordField("Confirm Password", validators=[Length(4),
                                     DataRequired(), EqualTo("password",
                                        message="Passwords must be equal.")])
    submit = SubmitField("Register")

    def validate_username(self, username):
        user = Student.query.filter_by(username=username.data).first()
        if user is not None:
            raise ValidationError("Username already taken!")

    def validate_email(self, email):
        user = Student.query.filter_by(email=email.data).first()
        if user is not None:
            raise ValidationError("Please use a different email address!")


class LoginForm(FlaskForm):
    username = StringField("Username", validators=[DataRequired(), Length(2)])
    password = PasswordField("Password", validators=[DataRequired(), Length(4)])
    remember_me = BooleanField("Remember Me")
    submit = SubmitField("Login")


class CreateGistForm(FlaskForm):
    gist_title = StringField("Title of Gist", validators=[DataRequired()])
    gist_content = TextAreaField(validators=[DataRequired()])
    submit = SubmitField("Post Gist")


class UpdateGistForm(FlaskForm):
    gist_title = StringField("Update the Gist", validators=[DataRequired()])
    gist_content = TextAreaField(validators=[DataRequired()])
    submit = SubmitField("Update")
