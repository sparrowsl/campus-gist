from flask_wtf import FlaskForm
from wtforms import (StringField, PasswordField, SubmitField, TextAreaField,
                     SelectField)
from wtforms.validators import (DataRequired, Length, Email, ValidationError,
                                EqualTo)
from flask_ckeditor import CKEditorField


institutes = [
    ("BCC", "BlueCrest College"),
    ("FBC", "Fourah Bay College"),
    ("CODE", "College of Digital Excellence"),
    ("CCMT", "Canadian College of Modern Technology"),
]

class RegistrationForm(FlaskForm):
    fullname = StringField("Full Name", validators=[DataRequired()])
    username = StringField("Username", validators=[DataRequired(),
                           Length(4, 20)])
    email = StringField("Email Address", validators=[Email()])
    instututions = SelectField("Institution", choices=institutes)
    password = PasswordField("Password", validators=[DataRequired(), Length(4)])
    confirm_password = PasswordField("Confirm Password", validators=[Length(4),
                                     DataRequired(), EqualTo("password",
                                        message="Passwords must be equal.")])
    submit = SubmitField("Register")


class LoginForm(FlaskForm):
    username = StringField("Username", validators=[DataRequired()])
    password = PasswordField("Password", validators=[DataRequired(), Length(4)])
    submit = SubmitField("Login")


class CreateGistForm(FlaskForm):
    gist_title = StringField("Title of Gist", validators=[DataRequired()])
    gist_content = CKEditorField(validators=[DataRequired()])
    submit = SubmitField("Post Gist")


class UpdateGistForm(FlaskForm):
    gist_title = StringField("Update the Gist", validators=[DataRequired()])
    gist_content = CKEditorField(validators=[DataRequired()])
    submit = SubmitField("Update")
