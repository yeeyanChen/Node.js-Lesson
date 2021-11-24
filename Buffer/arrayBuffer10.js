let uint8 = new Uint8Array(1);

uint8[0] = 256; //100000000
console.log(uint8[0]); //0

uint8[0] = -1; //11111111
console.log(uint8[0]); //255
