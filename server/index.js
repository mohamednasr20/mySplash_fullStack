const app = require('./app');
const http = require('http');
const config = require('./utlis/config');
const logger = require('./utlis/logger');

const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
