[![Build Status](https://travis-ci.org/dverbovyi/test-server.svg?branch=master)](https://travis-ci.org/dverbovyi/test-server)
[![Test Coverage](https://codeclimate.com/github/dverbovyi/test-server/badges/coverage.svg)](https://codeclimate.com/github/dverbovyi/test-server/coverage)
[![Code Climate](https://codeclimate.com/github/dverbovyi/test-server/badges/gpa.svg)](https://codeclimate.com/github/dverbovyi/test-server)

# test-server
NodeJS + Express

## Available APIs

### Accounts
	GET api/accounts
returns accounts

### Roles
	GET api/roles
returns roles

### Blogs
	GET api/blogs
returns blogs

## Server setup

### install dependencies:
	npm i
### run server:
	npm start

The endpoints available under `http://localhost:3000` host, e.g.:

`http://localhost:3000/api/roles`
`http://localhost:3000/api/accounts`
`http://localhost:3000/api/blogs`

### run tests:
	npm test	

