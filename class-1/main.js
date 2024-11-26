// const fs = require("fs");

// function rythem() {
//   return new Promise(function (resolve) {
//     fs.readFile("a.txt", "utf-8", function (err, data) {
//       resolve(data);
//     });
//   });
// }

// async function onDone() {
//   const data = await rythem();
//   console.log(data);
// }
// onDone();
// console.log("1");

let a = 0;
const now = new Date();
for(let i=0; i<100000000; i++){
  a = a+i;
}
const later = new Date();
console.log(later.getSeconds()-now.getSeconds());
