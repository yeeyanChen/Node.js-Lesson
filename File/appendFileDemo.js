const fs = require("fs");



console.log(new Date().toISOString());

// [...Array(10000)].forEach( function (item, index) {
//     fs.appendFile("./docs/appendFileDemo.txt", index + "\n", function (err) {
//         if (err) console.log(err);

//     });
// });

var stream = fs.createWriteStream("./docs/appendFileDemo.txt", {flags:'a'});
[...Array(10000)].forEach( function (item, index) {
    stream.write(index + "\n");
});
stream.end();

console.log(new Date().toISOString());
