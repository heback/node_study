const fs = require('fs');

fs.writeFile('write_file.txt', '글쓰기 예제 입니다.', (err)=>{
    if(err){
        throw err;
    }
    fs.readFile('write_file.txt', (err, data)=>{
        if(err){
            throw err;
        }
        console.log(data.toString());
    })
});