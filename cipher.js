const crypto = require('crypto');

let key = crypto.randomBytes(32);
let iv = crypto.randomBytes(16);
let pw = 'Heback201!';
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
let crypted = cipher.update(pw, 'utf8', "base64");
crypted += cipher.final('base64');
console.log('암호화: ', crypted);

const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decrypted = decipher.update(crypted, 'base64', 'utf8');
decrypted += decipher.final('utf8');
console.log('복호화: ', decrypted);