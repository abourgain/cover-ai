# Cover-AI project

Web site project for image creation using Stable Diffusion

## Table of Contents
* [Installation](#installation)
    * [Quick Setup](#quick-setup)
    * [Setup Frontend](#setup-frontend)
    * [Setup Backend](#setup-backend)
    * [Setup Pylint](#setup-pylint)
* [Useful Commands](#useful-commands)
    * [Psql](#psql)
    * [Lint](#lint)
* [Useful Links](#useful-links)

## Installation

### Quick Setup
* `make install` downloads the dependencies for both backend and frontend
* `make front` starts the development server for the frontend
* `make back` starts the development server for the backend

### Setup Frontend
* To setup the frontend (i.e., download all the packages), go to `cd frontend` and run `npm install`.
* To start a development server, run `npm run dev`.
This uses [Vite](https://vitejs.dev/), which significantly reduces loading times (< 1s)

### Setup Backend
* To setup the backend, run `pip install -r requirements.txt` to install all the necessary Python packages.
* To start the backend development server, run `python3 main.py`. The reload option allows the server to reload on every change!

### Setup Pylint

Add the following lines to the `.vscode/settings.json` file:
```
{ ...
  "python.linting.enabled": true,
  "python.linting.pylintEnabled": true,
  "python.analysis.typeCheckingMode": "off",
  "python.linting.pylintArgs": [
    "--rcfile",
    "${workspaceFolder}/backend/pylint.conf"],
  ... }
```

## Useful Commands

### Lint
Commands to run `eslint` and `pylint`
* **With Make:**
Run `make lint` to launch the lints for both backend and frontend

* **Eslint:**
To lint the frontend, run `npm run lint` in the `frontend` folder.
The eslint config is in the `.eslintrc.json` file.

* **Pylint:**
To lint the backend, run `pylint --rcfile=backend/pylint.conf backend`.<br>

## Useful Links
* [Commit convention (with emojis)](https://github.com/kazupon/git-commit-message-convention/blob/master/README.md)

