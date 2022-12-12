const url = require('url');

const URL = url.URL;
const myURL = new URL('https://dart.dev/guides/language/language-tour#other-operators');

console.log('new URL(): ', myURL);
const parsedUrl = url.parse('https://dart.dev/guides/language/language-tour#other-operators');
console.log('url.parse(): ', parsedUrl);