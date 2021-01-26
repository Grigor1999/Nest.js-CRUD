# user-service
Based on https://gitlab.elunic.software/dev/typescript-starter @2.2.1

# Quickstart

##init
* `npm run shell:build` - required for first start
* `npm run shell` - jump into the docker shell
* `npm i`
* `npm run migration:run` - init db schema
* `npm run seed` - create user admin // admin

##start
* `npm run shell` - jump into the docker shell
* `npm run dev`
* [http://localhost:4070/swagger](http://localhost:4070/swagger)
* login with `admin // admin`

# Help

## Development
* `npm run shell:join`: join the shell with a separate console window
* `npm run migration:run`: update db schema
* `npm run fix`: run linting and formatting checks and fix errors automatically, where possible
* `npm run test`: run tests in watch mode
* `.env` The configuration mechanism will use a `.env` file placed in the project root,
         if it exists.
* phpMyAdmin: [http://localhost:8079](http://localhost:8079)

## known issues
* Docker missing permissions: https://www.digitalocean.com/community/questions/how-to-fix-docker-got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket
