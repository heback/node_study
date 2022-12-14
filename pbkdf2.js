const crypt = require('crypto');

// const size = 64;
// let encoded = '';
// let salt_buf = '';
// crypt.randomBytes(size, (err, buf) => {
//     salt_buf = buf.toString('base64');
//     console.log(salt_buf);
//     crypt.pbkdf2('1234', salt_buf, 100000, size, 'sha512', (err, key)=>{
//         encoded = key.toString('base64');
//         console.log(encoded);
//     });
// });

const salt = crypt.randomBytes(20).toString('base64');
let encoded = crypt.pbkdf2Sync('password', salt, 10000, 20, 'sha512').toString('base64');

console.log('salt: ', salt);
console.log('password: ', encoded);