## Description

A simple application to manage employees of a company, it allows to add multiple employees to multiple companies, with basic functions of a CRUD for both entities.

๐ [View endpoint documentation](https://api-manage-employees.herokuapp.com/doc) 

## Installation ๐
> โ ๏ธโ ๏ธโ ๏ธWARNINGโ ๏ธโ ๏ธโ ๏ธ
>
> ๐ PostgreSQL is required 

### .env  ๐๏ธ๐๏ธ๐๏ธ
```bash
#make a .env file in root 
DATABASE_URL="postgres://user:pass@host:5432/db_name"
```

```bash
# install packages
$ npm install

# build
$ npm run build

# run migrations
$ npm run typeorm migration:run
```


## Running the app ๐ฃ

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test ๐งช

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```
