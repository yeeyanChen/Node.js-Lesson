function str2ab(str) {
  var buf = new ArrayBuffer(str.length * 2); //每個字元占用 2 個 bytes
  var bufView = new Uint16Array(buf);
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

let str = "abc";
let buf = str2ab(str);
console.log(buf);

function ab2str(buf) {
  console.log(new Uint16Array(buf));
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

let str2 = ab2str(buf);
console.log(str2);
