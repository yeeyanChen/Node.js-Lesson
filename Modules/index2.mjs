import { fileURLToPath } from "node:url";
console.log(import.meta.url);
console.log(fileURLToPath(import.meta.url));

let q = new URL(import.meta.url).searchParams.get("someURLInfo"); // 5
console.log(q);

console.log(import.meta.env.BASE_URL);
