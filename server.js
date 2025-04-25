import express from 'express';
import jsonServer from 'json-server';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

// Initialize JSON Server
const jsonServerRouter = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Enable CORS and JSON parsing
app.use(express.json());
app.use(middlewares);

// Mount JSON Server on /api
app.use('/api', jsonServerRouter);

// Serve static files
app.use(express.static(join(__dirname, 'dist')));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
