type User = {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
};

function isLegal(user: User) {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}

function greet(user: User) {
  console.log("Hello " + user.firstName);
}

isLegal({
  firstName: "rythem",
  lastName: "goyal",
  age: 20,
  email: "asdjh",
});

function maxValue(arr: number[]): number {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxValue([1, 2, 3]));

interface User1 {
  firstName: string;
  lastName: string;
  age: number;
}

function filteredUser(users: User1[]) {
  return users.filter((x) => x.age >= 18);
}

console.log(
  filteredUser([
    {
      firstName: "rythem",
      lastName: "goyal",
      age: 20,
    },
    {
      firstName: "ishika",
      lastName: "agarwal",
      age: 18,
    },
  ])
);
