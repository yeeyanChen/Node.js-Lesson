const MyTransform = require("./MyTransform");

const transformStream = new MyTransform();
process.stdin.pipe(transformStream).pipe(process.stdout);
