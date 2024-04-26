import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  const newUser = await client.query(
    `INSERT INTO users (username, password, name) VALUES ($1,$2,$3)`,
    [username, password, name]
  );
  return newUser;
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
  const data = await client.query(`SELECT * FROM users WHERE id = $1`, [
    userId,
  ]);
  if (data.rows.length === 0) {
    return null; // If no user found, return null
  }
  const { id, username, password, name } = data.rows[0];
  const user = { id, username, password, name };
  return user;
}
