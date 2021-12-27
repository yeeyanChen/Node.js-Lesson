const fs = require("fs");

fs.stat("./docs/eerfr.txt", (err, stats) => {
    console.log("eerfr.txt", stats);
})

fs.stat("./docs/01.txt", (err, stats) => {
    console.log("01.txt", stats);
})

console.log(fs.constants);


