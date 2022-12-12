const path = require('path');

const string = __filename;

console.log(path.sep);
console.log(path.delimiter);
console.log(path.dirname(string));
console.log(path.extname(string));
console.log(path.basename(string));
console.log(path.parse(string));

console.log(path.format({
    dir: '/Users/heback/WebstormProjects/node_study',
    name: 'path',
    ext: '.js'
}))