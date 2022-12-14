const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value'
        }
    }
};

console.time('전체 시간');
console.log('그냥 로그');
console.log(string, number, boolean);
console.error('에러 메세지');

console.dir(obj, {colors: false, depth: 2});
console.dir(obj, {colors: true, depth: 1});

console.time('시간 측정');
for(let i = 0; i < 100000; i++){
    continue;
}
console.timeEnd('시간 측정');

console.timeEnd('전체 시간');
