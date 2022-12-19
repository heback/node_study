const util = require('util');
const crypto = require('crypto');

const donotUseMe = util.deprecate((x, y) => {
    console.log(x+y);
}, 'donotUseMe 함수는 deprecated 되었으니 더 이상 사용하지 마세요!');
donotUseMe(1, 2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
.then((buf)=>{
    console.log(buf.toString('base64'));
})
.catch((err)=>{
    console.log(err);
});

const fs = require('fs');

const stat = util.promisify(fs.stat);
stat('.').then((stats) => {
    console.log(stats);
}).catch((error) => {
    console.log(error);
});