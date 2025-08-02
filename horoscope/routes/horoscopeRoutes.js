import express from 'express';
import { authenticateUser } from '../middleware/authMiddleware.js';
import { getHoroscopeHistory, getHorosopeToday } from '../controllers/horoscopeController.js';
import { rateLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.get('/today', rateLimiter, authenticateUser, getHorosopeToday);

router.get('/history', rateLimiter, authenticateUser, getHoroscopeHistory);

export default router;