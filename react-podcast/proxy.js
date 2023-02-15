import { createServer } from 'cors-anywhere';

const host = '0.0.0.0';
const port = 8000;

createServer({
  originWhitelist: [], // Permitir a todos los dominios
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
  console.log(`Servidor de proxy CORS en ejecución en http://${host}:${port}`);
});