import express from 'express';

import home from './modules/home/index.js';
import bills from './modules/bills/index.js';

const routes = (app) => {
    app.use("/", home);
    app.use("/bills", bills);
};

export { routes };