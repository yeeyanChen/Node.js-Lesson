const fs = require("fs");

//不具有 BOM 的 UTF-8
fs.readFile("./docs/01.txt", function (err, data) {
  console.log("01.txt", data);
  // 01.txt <Buffer 68 65 6c 6c 6f 20 62 69 74 63 68>
});

//具有 BOM 的 UTF-8
//前 3 個 byte 為 ef bb bf，即 BOM 字元
fs.readFile("./docs/02.txt", function (err, data) {
  console.log("02.txt", data);
  // 02.txt <Buffer ef bb bf 68 65 6c 6c 6f 20 62 69 74 63 68>
});

/**
 *  english_utf8.txt 為 UTF-8 編碼
 *  english_utf8.txt 內容為 "KF"
 *  記憶體內容為 <Buffer 4b 46>
 *
 *  編碼                          結果
 *  ascii                         KF
 *  utf8/utf-8                    KF
 *  hex                           4b46
 *  ucs2/usc-2/utf16le/utf-16le   䙋  ("\u{464b}")
 *  base64                        S0Y=
 */
fs.readFile(
  "./docs/english_utf8.txt",
  { encoding: "base64" },
  function (err, data) {
    console.log("english_utf8.txt", data);
    // english.txt S0Y=
  }
);

/**
 *  english_utf8_bom.txt 為 具有 BOM 的 UTF-8 編碼
 *  english_utf8_bom.txt 內容為 "KF"
 *  記憶體內容為 <Buffer ef bb bf 4b 46>
 *
 *  編碼                            結果
 *  ascii                           o;?KF   (因為最多是 0x7F，所以 0x80 等於 0x00，0x90 等於 0x10，因此0xbb 等於 0x3b 即 「;」)
 *  utf8/utf-8                      KF
 *  hex                             efbbbf4b46
 *  ucs2/usc-2/utf16le/utf-16le     믯䮿  ("\ubbef\u4bbf")
 *  base64                          77u/S0Y=
 *  latin1                          ï»¿KF
 */
fs.readFile(
  "./docs/english_utf8_bom.txt",
  { encoding: "utf-16le" },
  function (err, data) {
    console.log("english_utf8_bom.txt", data);
    // english_utf8_bom.txt 믯䮿
  }
);

/**
 *  english_utf16le.txt 為 UTF-16 LE 編碼
 *  english_utf16le.txt 內容為 "KF"
 *  記憶體內容為 <Buffer ff fe 4b 00 46 00>
 *
 *  編碼          結果
 *  ascii         KF
 *  utf8/utf-8    KF
 *  hex           4b46
 *  ucs2/usc-2    䙋  ("\u{464b}")
 *  base64        //5LAEYA
 */
fs.readFile(
  "./docs/english_utf16le.txt",
  { encoding: "ascii" },
  function (err, data) {
    console.log("english_utf16le.txt", data);
  }
);

fs.readFile("./docs/chinese.txt", { encoding: "utf8" }, function (err, data) {
  console.log("chinese.txt", data);
  // chinese.txt 我
});

fs.readFile("./docs/emoji.txt", function (err, data) {
  console.log("emoji.txt", data);
  // emoji.txt 我
  // <Buffer ff fe 3d d8 0d de>
});

//具有 BOM 的 UTF-16BE
//前 2 個 byte 為 fe ff，即 BOM 字元
fs.readFile("./docs/03.txt", function (err, data) {
  console.log("03.txt", data);
  // 03.txt <Buffer fe ff 00 68 00 65 00 6c 00 6c 00 6f 00 20 00 62 00 69 00 74 00 63 00 68>
});

//具有 BOM 的 UTF-16LE
//前 2 個 byte 為 ff fe，即 BOM 字元
fs.readFile("./docs/04.txt", function (err, data) {
  console.log("04.txt", data);
  // 04.txt <Buffer ff fe 68 00 65 00 6c 00 6c 00 6f 00 20 00 62 00 69 00 74 00 63 00 68 00>
});
