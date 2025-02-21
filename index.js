const jsonServer = require("json-server"); // json-server kutubxonasini chaqirish
const server = jsonServer.create(); // Server yaratish
const router = jsonServer.router("db.json"); // JSON fayldan router yaratish
const middlewares = jsonServer.defaults(); // Standart middlewarelarni ishlatish
const port = process.env.PORT || 8000; // Portni belgilash (8000 yoki muhitdagi PORT)

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
