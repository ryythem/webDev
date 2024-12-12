import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function insertUser(
//   username: string,
//   password: string,
//   firstName: string,
//   lastName: string,
//   email: string
// ) {
//   const res = await prisma.user.create({
//     data: {
//       username,
//       password,
//       firstName,
//       lastName,
//       email,
//     },
//   });
//   console.log(res);
// }

// insertUser("admin1", "123456", "rythem", "goyal","haha@email.com")

async function getTodos(userId: number) {
  const res = await prisma.user.findMany({
    where: {
      id: userId,
    },
  });
  console.log(res);
}

getTodos(1);