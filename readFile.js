const fs = require('fs');

fs.readFile('example_file.txt', (err, data)=>{
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});