import express from 'express';
import cors from 'cors';
import compression from 'compression';
import { createServer } from 'http';
import environment from './config/environments';

//ENV CONFIG (READ)

if (process.env.NODE_ENV !== 'production') {
  const env = environment;
}

async function init() {
  const app = express()

  app.use(cors())
  app.use(compression());
  app.get('/', (req, res) => {
    return res.send('API MEAN+G Online.');
  });

  const httpServer = createServer(app);
  const PORT = process.env.PORT || 5000;
  httpServer.listen(
    {
      port: 5000,
    },
    () => {
      console.log(`http://localhost:${PORT}/ API MEAN+G Online`);
    }
  );
}

init();
