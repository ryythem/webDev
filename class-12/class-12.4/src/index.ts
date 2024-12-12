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

async function insertUserAndAddress(
  username: string,
  password: string,
  email: string,
  city: string,
  country: string,
  street: string,
  pincode: string
) {
  try {
    await client.connect();
    await client.query("BEGIN");

    const insertUserText = `
    INSERT into users2 (username, password, email)
    values ($1,$2,$3)
    returning id;`;

    const userRec = await client.query(insertUserText, [
      username,
      password,
      email,
    ]);
    const userId = userRec.rows[0].id;

    const insertAddressText = `
    INSERT into addresses (user_id,city,country,street,pincode)
    values ($1,$2,$3,$4,$5);`;

    await client.query(insertAddressText, [
      userId,
      city,
      country,
      street,
      pincode,
    ]);
    await client.query("COMMIT");
    console.log("User and address added successfully");
  } catch (err) {
    await client.query("ROLLBACK");
    console.log("Error during transaction");
    throw err;
  } finally {
    await client.end();
  }
}
insertUserAndAddress(
  'john', 
  'john@example.com', 
  'securepassword123', 
  'Kolkalta', 
  'India', 
  '123 Broadway St', 
  '10001'
);