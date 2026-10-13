import express from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Compress all responses for maximum speed
app.use(compression({
  threshold: 1024,
  level: 6
}));

app.use(express.json());

// Fast static caching options
const staticOptions = {
  maxAge: '1d',
  etag: true,
  lastModified: true
};

// Serve static assets with prefixes used in index.html as well as root
app.use('/images', express.static(__dirname, staticOptions));
app.use('/imagens', express.static(__dirname, staticOptions));
app.use('/css', express.static(__dirname, staticOptions));
app.use('/js', express.static(__dirname, staticOptions));
app.use(express.static(__dirname, staticOptions));

// Fallback all navigation requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
