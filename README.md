# Node/docker app Boilerplate

- Typescript
- TypeOrm
- Nodejs
- Expressjs
- Mysql
- docker-compose

## Quick Start

1. Install yarn

2. Install docker and docker-compose

3. Rename .env.example to .env

4. yarn install

5. yarn dev for starting db and node app (if there is a db connection error do cntrl C and yarn restart)

if db connection error:

```
CNTRL C
  yarn restart
  or
  yarn stop
  yarn dev
```

if error: "Error starting userland proxy: listen tcp4 0.0.0.0:3306: bind: address already in use":

```bash
$ sudo killall mysqld
```


