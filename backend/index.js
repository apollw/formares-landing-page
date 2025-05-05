require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors(), express.json());
// rota de exemplo
app.get('/api/health', (req, res) => res.json({ ok: true }));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 rodando em http://localhost:${PORT}`));

const content = [
    { section: 'events-preview',
      img: 'formares-evento-1.png',
      title: 'I Seminário contra a Exploração…',
      body: 'Este Seminário abordou a prevenção…'
    },
    /* adicione os demais eventos aqui */
  ];
  
  app.get('/api/content', (req, res) => {
    const { section } = req.query;
    if (section) {
      return res.json(content.filter(c => c.section === section));
    }
    res.json(content);
  });
  