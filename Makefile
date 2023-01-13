# Installer toutes les dépendances du projet
install:
	cd ./frontend; npm install
	cd ./backend; pip3 install --no-deps -r requirements.txt;

# Start frontend
front:
	cd ./frontend; npm run dev

# Start frontend
back:
	cd ./backend; python3 main.py --no-cache

### ---------------   Lint  --------------- ###

eslint:
	cd ./frontend; npm run lint

pylint:
	pylint --rcfile=backend/pylint.conf backend

lint:
	make eslint
	make pylint
