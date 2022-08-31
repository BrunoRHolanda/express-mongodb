import http from 'http';

import { app } from './src/app.js';

const server = http.createServer(app);

server.listen(4005, () => {
    console.log('App is running on port: 4005!');
});
