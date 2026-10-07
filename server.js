import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// Serve audio file aliases
app.get(['/tu-cancion.mp3', '/HUMBE%20-%20bien%20hecho.mp3'], (req, res) => {
  res.sendFile(path.join(__dirname, 'HUMBE - bien hecho.mp3'));
});

// Serve static files from root directory
app.use(express.static(__dirname));

// Fallback to index.html for any unmatched route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
