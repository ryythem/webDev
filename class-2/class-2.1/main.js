function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}

function sumOfSomething(a, b, callback) {
  let square1 = callback(a);
  let square2 = callback(b);
  return square1 + square2;
}

let ans = sumOfSomething(1, 2, cube);
console.log(ans);

function myOwnSetTimeOut(duration) {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
  return p;
}

myOwnSetTimeOut(1000).then(function () {
  console.log("log the first thing ");
});