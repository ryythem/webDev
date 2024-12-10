import dotenv from "dotenv";
import { Client } from "pg";
dotenv.config();
const url = process.env.post_url;



const client = new Client({
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

async function insertUserdata(
  username: string,
  password: string,
  email: string
) {
  await client.connect();
  const result = await client.query(`
        INSERT INTO users2(username,password,email)
        VALUES ('${username}','${password}','${email}')
    `);
  console.log(result);
}

insertUserdata("rythem", "haharythem", "rythem@email.com");
