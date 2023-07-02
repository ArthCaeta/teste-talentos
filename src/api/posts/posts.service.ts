import { postQueries } from "./posts.queries";

export async function getPosts(pool) {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(postQueries.getPosts);
    connection.release();
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
}

export async function getPostById(pool, id: String) {
  try {
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.query(postQueries.getPostById, [
      id,
    ]);
    connection.release();
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
}

export async function deletePostById(pool, id: String) {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(postQueries.deletePostById, [id]);
    connection.release();
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
}

export async function createPost(pool, body) {
  try {
    const { name, description, category } = body;

    if (!name || !description || !category) {
      throw new Error("Name, description, and category are required fields.");
    }

    const connection = await pool.getConnection();
    const queryResult = await connection.query(postQueries.createPost, [
      name,
      description,
      category,
    ]);
    connection.release();

    const newPostId = queryResult[0].insertId;

    return {
      id: newPostId,
      name,
      description,
      category,
    };
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
}

export async function updatePost(pool, body, id: String) {
  try {
    const { name, description, category } = body;

    let query = "UPDATE teste_talentos.posts SET ";
    let queryValues = [];
    let queryValuesString = "";

    if (description) {
      queryValues.push(`description = "${description}"`);
    }
    if (name) {
      queryValues.push(`name = "${name}"`);
    }
    if (category) {
      queryValues.push(`category = "${category}"`);
    }

    if (queryValues.length === 0) {
      throw new Error("At least one field must be provided.");
    } else {
      queryValuesString = queryValues.join(", ");
    }

    query = query + queryValuesString + ` WHERE id = ${id};`;

    console.log(query);

    const connection = await pool.getConnection();
    const queryResult = await connection.query(query);
    connection.release();

    return "Post updated successfully";
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
}
