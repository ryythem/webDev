//Arrow functions
const sum = (a, b) => {
  return a + b;
};
const ans = sum(5, 10);
console.log(ans);

//map
const input = [1, 2, 3, 4, 5];
function transform(i) {
  return i * 2;
}
const ans1 = input.map(function (i) {
  return i * 2;
});
console.log(ans1);

const ans2 = input.filter((i) => {
  if (i % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(ans2);
