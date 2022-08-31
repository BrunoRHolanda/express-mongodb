import express from 'express'

import main from './services/main.js'

const router = express.Router()

router.get('/', main)

export default router
