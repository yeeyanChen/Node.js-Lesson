const crypto = require("crypto");

let sa = "5263987149";
let sb = "5963987149";
var key = crypto.pseudoRandomBytes(32);
// var ah = crypto.createHmac("sha256", key).update(sa).digest();
var ah = crypto.createHash("sha256").update(sa).digest();
// var bh = crypto.createHmac("sha256", key).update(sa).digest();
var bh = crypto.createHash("sha256").update(sb).digest();
console.log(ah);
console.log(bh);
