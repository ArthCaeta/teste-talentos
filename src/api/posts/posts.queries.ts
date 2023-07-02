export const postQueries = {
  getPosts: `SELECT * FROM teste_talentos.posts;`,
  getPostById: `SELECT * FROM teste_talentos.posts WHERE id = ?;`,
  createPost:
    "INSERT INTO teste_talentos.posts (name, description, category) VALUES (?, ?, ?)",
  deletePostById: "DELETE FROM teste_talentos.posts WHERE id = ?",
};
