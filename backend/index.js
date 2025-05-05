require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors(), express.json());
// rota de exemplo
app.get('/api/health', (req, res) => res.json({ ok: true }));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 rodando em http://localhost:${PORT}`));
