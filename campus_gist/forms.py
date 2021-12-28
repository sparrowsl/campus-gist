from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, TextAreaField
from wtforms.validators import (DataRequired, Length, Email, ValidationError,
                                EqualTo)


class RegistrationForm(FlaskForm):
    fullname = StringField("Full Name", validators=[DataRequired()])
    username = StringField("Username", validators=[DataRequired(),
                           Length(4, 20)])
    email = StringField("Email Address", validators=[Email()])
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
    gist_content = TextAreaField(validators=[DataRequired()])
    submit = SubmitField("Create")


class UpdateGistForm(FlaskForm):
    gist_title = StringField("Update the Gist", validators=[DataRequired()])
    gist_content = TextAreaField(validators=[DataRequired()])
    submit = SubmitField("Update")
