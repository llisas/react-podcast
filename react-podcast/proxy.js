const corsProxy = require('cors-anywhere');
const host = '0.0.0.0';
const port = 8000;
corsProxy.createServer({
  originWhitelist: [], // All domains allowed
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
  console.log(`Servidor de proxy CORS en ejecución en http://${host}:${port}`);
});