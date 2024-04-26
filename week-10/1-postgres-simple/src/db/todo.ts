import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  const data = await client.query(
    `INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3) RETURNING *`,
    [userId, title, description]
  );
  const todo = {
    title: data.rows[0].title,
    done: data.rows[0].done,
    description: data.rows[0].description,
    id: data.rows[0].id,
  };
  return todo;
}

/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  const updatedTodo = await client.query(
    `UPDATE todos SET done='true' WHERE id=${todoId} RETURNING *`
  );

  const { title, description, done, id } = updatedTodo.rows[0];
  return { title, description, done, id };
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  const fetchedTodos = await client.query(
    `SELECT * FROM todos WHERE user_id=${userId}`
  );
  return fetchedTodos.rows;
}
