import express from 'express';
import { rateLimiter } from '../middleware/rateLimiter.js';
import { validateLogin, validateSignup } from '../middleware/validateFields.js';
import { login, logout, signup } from '../controllers/authControllers.js';

const router = express.Router();

router.post('/signup', rateLimiter, validateSignup, signup);
router.post('/login', rateLimiter, validateLogin, login);
router.post('/logout', logout);

export default router;