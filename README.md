# Projet Cover-AI

Projet de site web pour la création d'image à partir de Stable Diffusion

## Sommaire
* [Installation](#installation)
    * [Quick setup](#quick-setup)
    * [Setup frontend](#setup-frontend)
    * [Setup backend](#setup-backend)
    * [Setup pylint](#setup-pylint)
* [Commandes utiles](#commandes-utiles)
    * [Psql](#psql)
    * [Lint](#lint)
* [Liens utiles](#liens-utiles)

## Installation

### Quick setup
* `make install` télécharge les dépendances du back et du front
* `make front` lance le serveur de développement du front
* `make back` lance le serveur de développement du back

### Setup Frontend
* Pour setup le frontend (i.e. télécharger tous les packets), faire `cd frontend` et lancer `npm install`.
* Pour lancer un serveur de développement, faire `npm run dev`.
Ce dernier utilise [Vite](https://vitejs.dev/) qui réduit considérablement les temps de chargement (< 1s)

### Setup Backend
* Pour setup le backend, faire un `pip install -r requirements.txt` pour installer tous les packets python nécessaires.
* Pour lancer le serveur backend en developpement, `python3 main.py`. L'option reload permet de recharger le serveur à chaque changement!

### Setup Pylint

Ajouter les lignes suivantes au fichier `.vscode/settings.json`
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

## Commandes utiles

### Lint
Commandes pour lancer `eslint` et `pylint`
* **Avec Make:**
Faire `make lint` pour lancer les lint pour le back et le front

* **Eslint:**
Pour linter le frontend, lancer `npm run lint` dans le dossier `frontend`.
La config d'eslint se trouve dans le fichier `.eslintrc.json`.

* **Pylint:**
Pour linter le backend, lancer `pylint --rcfile=backend/pylint.conf backend` dans le dossier `macifbot`.<br>

## Liens utiles
* [Commit convention (with emojis)](https://github.com/kazupon/git-commit-message-convention/blob/master/README.md)
