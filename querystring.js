const url = require('url');
const querystring = require('querystring');

const parseUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log(parseUrl);
const query = querystring.parse(parseUrl.query);
console.log(query);
console.log(querystring.stringify(query));