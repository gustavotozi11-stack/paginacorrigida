import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '50mb' }));

// Endpoint to permanently save client-resolved story images
app.post('/api/cache-story', (req, res) => {
  const { filename, base64Data } = req.body;
  if (filename && base64Data) {
    try {
      const cleanBase64 = base64Data.replace(/^data:image\/\w+;base64,/, '');
      const buffer = Buffer.from(cleanBase64, 'base64');
      fs.writeFileSync(path.join(__dirname, filename), buffer);
      console.log(`Saved story asset: ${filename} (${buffer.length} bytes)`);
      return res.json({ success: true, saved: filename });
    } catch (e) {
      console.error('Error saving story:', e);
    }
  }
  res.json({ success: false });
});

// Serve static assets with prefixes used in index.html as well as root
app.use('/images', express.static(__dirname));
app.use('/imagens', express.static(__dirname));
app.use('/css', express.static(__dirname));
app.use('/js', express.static(__dirname));
app.use(express.static(__dirname));

// Fallback all navigation requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
