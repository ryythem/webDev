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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const url = process.env.post_url;
const client = new pg_1.Client({
    connectionString: url,
});
// async function createUsersTable() {
//   await client.connect();
//   const result = await client.query(`
//         CREATE TABLE users2 (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `);
//   console.log(result);
// }
// createUsersTable();
// async function insertUserdata(
//   username: string,
//   password: string,
//   email: string
// ) {
//   await client.connect();
//   const result = await client.query(`
//         INSERT INTO users2(username,password,email)
//         VALUES ($1,$2,$3)
//     `,[username, password, email]);
//   console.log(result);
// }
// insertUserdata("haharythem", "haharythem", "haharythem@email.com");
function insertUserAndAddress(username, password, email, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            yield client.query("BEGIN");
            const insertUserText = `
    INSERT into users2 (username, password, email)
    values ($1,$2,$3)
    returning id;`;
            const userRec = yield client.query(insertUserText, [
                username,
                password,
                email,
            ]);
            const userId = userRec.rows[0].id;
            const insertAddressText = `
    INSERT into addresses (user_id,city,country,street,pincode)
    values ($1,$2,$3,$4,$5);`;
            yield client.query(insertAddressText, [
                userId,
                city,
                country,
                street,
                pincode,
            ]);
            yield client.query("COMMIT");
            console.log("User and address added successfully");
        }
        catch (err) {
            yield client.query("ROLLBACK");
            console.log("Error during transaction");
            throw err;
        }
        finally {
            yield client.end();
        }
    });
}
insertUserAndAddress('john', 'john@example.com', 'securepassword123', 'Kolkalta', 'India', '123 Broadway St', '10001');
