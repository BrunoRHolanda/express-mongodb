import express from 'express';

import create from './services/create.js';

const router = express.Router();

router.post('/', create);

export default router;