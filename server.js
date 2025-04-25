import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import jsonServer from 'json-server';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

// Create JSON Server router
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Serve static files from the dist directory
app.use(express.static(join(__dirname, 'dist')));

// Use JSON Server for API routes
app.use('/api', middlewares, router);

// For any other route, serve the index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
