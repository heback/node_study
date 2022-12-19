// Node.js program to illustrate
// util.promisify() methods

// Importing Utilities module
const util = require('util')

// Importing File System module
const fs = require('fs')

// Use promisify to convert callback
// based method fs.readdir to
// promise based method
const readdir = util.promisify(fs.readdir)

readdir(process.cwd())
    .then(files => {
        console.log(files)
    })
    .catch(err => {
        console.log(err)
    })

const readFiles = async (path) => {
    const files = await readdir(path)
    console.log(files)
}

readFiles(process.cwd()).catch(err => {
    console.log(err)
})

// Use promisify to convert
// callback based methods to
// promise based methods
const readdir2 = util.promisify(fs.readdir)
const lstat = util.promisify(fs.lstat)


const readFiles2 = async (path) => {
    const files = await readdir2(path)
    for (let file of files) {
        const stats = await lstat(file)
        if (stats.isFile()) {
            console.log(`${file} -----> File`)
        } else {
            console.log(`${file} -----> Folder`)
        }
    }
}

readFiles2(process.cwd()).catch(err => {
    console.log(err)
})
