// create an ArrayBuffer with a size in bytes
var buffer = new ArrayBuffer(16);
//buffer is now [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

var view = new DataView(buffer);
view.setInt8(1, 2);
//buffer is now [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

console.log(view.getInt8(1)); // 2     因為 getInt8 取 1 個 byte，因此值是 2
console.log(view.getInt16(1)); // 512   因為 getInt16 取 2 個 bytes，而且以 big-endian 順序去讀取，因此值是 2 * 2^8 = 512
console.log(view.getInt16(1, true)); // 2   因為 getInt16 取 2 個 bytes，而且以 little-endian 順序去讀取，因此值是 2
