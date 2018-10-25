const server = require('./server');

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`puppy-love listening on port ${port}`));
