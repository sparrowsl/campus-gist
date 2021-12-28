# Campus Gist
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

A simple web app for students, to post gist about anything happening around campus.

## Tech Stack
- **Client:** HTML5, CSS3, UIkit(3.9)
- **Server:** Python(3.8), Flask(2.0)

## Features
- Create Post with Rich Text Editor (future feature)
- Update, Delete and Edit Gists (future feature)

## Run Locally

### Requirements to have
- Python 3.7+ (recommended)
- Git

Clone the project
```bash
  git clone https://github.com/benjithorpe/campus-gist.git
```

Go to the project directory
```bash
  cd campus-gist
```

Create virtual environment
```bash
  python3 -m venv venv
```

Activate virtual environment
```bash
  source venv/bin/activate
```

Install dependencies and packages

```bash
  pip install -r requirements.txt
```

Start the server
```bash
  # set environment variables
  export FLASK_APP=run.py
  export FLASK_ENV=development

  # start the server
  flask run
```

## Screenshots
![App Screenshot](./campus-gist-screenshot.png)


## Lessons Learned

Challenges
  - UI Designs
