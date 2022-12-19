// Node.js program to demonstrate the
// fs.stat() method

// Import the filesystem module
const fs = require('fs');

// Getting information for a file
fs.stat("example_file.txt", (error, stats) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Stats object for: example_file.txt");
        console.log(stats);

        // Using methods of the Stats object
        console.log("Path is file:", stats.isFile());
        console.log("Path is directory:", stats.isDirectory());
    }
});

// Getting information for a directory
fs.stat(".", (error, stats) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Stats object for: example_directory.txt");
        console.log(stats);

        // Using methods of the Stats object
        console.log("Path is file:", stats.isFile());
        console.log("Path is directory:", stats.isDirectory());
    }
});
