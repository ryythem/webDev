"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
function getTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findMany({
            where: {
                id: userId,
            },
        });
        console.log(res);
    });
}
getTodos(1);
