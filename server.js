
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Adjust path if db.json is not in root
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; // Use Render's PORT

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});