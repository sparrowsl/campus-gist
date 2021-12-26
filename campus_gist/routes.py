from flask import redirect, url_for, render_template, flash
from flask_mail import Message

from send_a_mail import app, mail
from send_a_mail.forms import SendMailForm




@app.route("/", methods=["GET", "POST"])
def index_page():
    form = SendMailForm()
    # Validate form
    if form.validate_on_submit():
        message = Message("subject", sender="from@example.com", recipients=[
                          form.email.data, "benjaminthorpe19@gmail.com"])

        mail.send(message)
        flash("Email was sent successfully!!")
        # clear previous form data by redirecting
        return redirect(url_for("index_page"))
    return render_template("index.html", form=form)
