from flask import redirect, url_for, render_template, flash

from campus_gist import app, db
from campus_gist.forms import (RegistrationForm, LoginForm, CreateGistForm,
                               UpdateGistForm)

from campus_gist.models import Student


@app.route("/")
def index_page():
    return render_template("index.html")


@app.route("/gists")
def show_all_gists():
    return render_template("gists.html")


@app.route("/gist")
def current_gist():
    return render_template("current_gist.html")


@app.route("/login", methods=["GET", "POST"])
def login_page():
    form = LoginForm()
    if form.validate_on_submit():
        user = Student.query.filter_by(username=form.username.data).first()
        # Check if username and password is invalid and redirect to login page
        if user and user.check_password(form.password.data):
            flash(f"Welcome back {user.fullname}!")
            return redirect(url_for("show_all_gists"))
        else:
            flash("Invalid username or password!!")
            return redirect(url_for("login_page"))
    return render_template("auth/login.html", form=form)


@app.route("/register", methods=["GET", "POST"])
def register_page():
    form = RegistrationForm()
    if form.validate_on_submit():
        institute = dict(form.instututions.choices).get(form.instututions.data)
        user = Student(fullname=form.fullname.data, email=form.email.data,
                       username=form.username.data,
                       institutions=institute)
        user.set_password(password=form.password.data)
        db.session.add(user)
        db.session.commit()
        flash(f"Successfully Registered")
        return redirect(url_for("show_all_gists"))
    return render_template("auth/register.html", form=form)


@app.route("/update", methods=["GET", "POST"])
def update_gist_page():
    form = UpdateGistForm()
    form.gist_content.data = "hello world of <b>CKeditor</b>!!"
    return render_template("auth/update_gist.html", form=form)


@app.route("/create", methods=["GET", "POST"])
def create_gist_page():
    form = CreateGistForm()
    return render_template("auth/create_gist.html", form=form)
