from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, TextAreaField
from wtforms.validators import (DataRequired, Length, Email, ValidationError)


class SendMailForm(FlaskForm):
    email = StringField("Email Address", validators=[Email(), DataRequired()])
    subject = StringField("Subject", validators=[DataRequired(), Length(4)])
    message = TextAreaField("Message to send", validators=[DataRequired()])
    send_button = SubmitField("Send Email")
