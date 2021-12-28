from flask import redirect, url_for, render_template, flash

from campus_gist import app
from campus_gist.forms import (RegistrationForm, LoginForm, CreateGistForm,
                               UpdateGistForm)



@app.route("/")
def index_page():
    return render_template("index.html")


@app.route("/gists")
def show_all_gists():
    return render_template("gists.html")


@app.route("/login", methods=["GET", "POST"])
def login_page():
    form = LoginForm()
    return render_template("auth/login.html", form=form)


@app.route("/register", methods=["GET", "POST"])
def register_page():
    form = RegistrationForm()
    return render_template("auth/register.html", form=form)


@app.route("/update", methods=["GET", "POST"])
def update_gist_page():
    return render_template("auth/update.html")


@app.route("/create", methods=["GET", "POST"])
def create_gist_page():
    return render_template("auth/create_gist.html")
