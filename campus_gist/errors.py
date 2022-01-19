from flask import render_template

from campus_gist import app, db


@app.errorhandler(404)
def error_404(error):
    return render_template("errors/error_404.html"), 404


@app.errorhandler(500)
def error_500(error):
    # Cancel any changes made to the database.
    db.session.rollback()
    return render_template("errors/error_500.html"), 500
