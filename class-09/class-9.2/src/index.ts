function getFirstElement<T>(arg: T[]) {
  return arg[0];
}

const el = getFirstElement<string>(["rythem", "goyal"]);
const el1 = getFirstElement<number>([1, 2, 3]);
console.log(el.toUpperCase());
