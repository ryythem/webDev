// interface User {
//   name: string;
//   age: number;
// }

// function SumOfAge(user1: User, user2: User) {
//   return user1.age + user2.age;
// }

// const age = SumOfAge(
//   {
//     name: "Rythem",
//     age: 22,
//   },
//   {
//     name: "Ram",
//     age: 25,
//   }
// );

// console.log(age);

// interface User {
//   id: string;
//   name: string;
//   age: number;
//   email: string;
//   password: string;
// }

// type UpdatedProps = Pick<User, "name" | "age" | "email">;

// type UpdatePropsPartial = Partial<UpdatedProps>

// const display = (updatedProps: UpdatePropsPartial)=>{
//     console.log(`Name ${updatedProps.name}`)
// }

// display({
//     name:"Rythem"
// })

// type User = {
//   name: string;
//   age: number;
// };

// const user: Readonly<User> = {
//   name: "John",
//   age: 21,
// };

// type Users = Record<string, { age: number; name: string }>;

// const users: Users = {
//   "ha@1": {
//     age: 21,
//     name: "dfs",
//   },
//   "ah@1": {
//     age: 22,
//     name: "sfd",
//   },
// };

// import zod from "zod";

// const A = zod.string();

// type A = zod.infer<typeof A>

// const u: A =10;
// const a: A = "aksd"
