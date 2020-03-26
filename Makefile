USER_ID := $(shell id -u)
SUB_MAKE := $(shell which make)

install: .env
	docker-compose build

start:
	docker-compose up -d --build --remove-orphans

stop:
	docker-compose down -v --remove-orphans

restart: stop start

serve:
	$(SUB_MAKE) bin/'ionic npm start'

bin/%:
	docker-compose run --rm --service-ports $*

.env:
	echo "USER_ID=$(USER_ID)" > .env
