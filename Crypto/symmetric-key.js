function textToBinary(string) {
  return string.split("").map(function (char) {
    return "0" + char.charCodeAt(0).toString(2);
  });
}

textToBinary("Test");

function XOR(a, b) {
  if (a.length !== b.length) {
    console.log("要求兩者二進位數字長度相同");
    return;
  }
  let num = (parseInt(a, 2) ^ parseInt(b, 2)).toString(2);
  if (num.length !== a.length) {
    // 因前面為0會被省略，所以要手動補0
    let padLength = a.length - num.length;
    num = "0".repeat(padLength) + num;
  }
  return num;
}
