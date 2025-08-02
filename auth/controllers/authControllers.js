import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getZodiacSign } from '../utils/zodiac.js';

export async function signup(req, res) {
    const { name, email, password, birthdate } = req.body;

    try {
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).send('User already exists');
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Calculate zodiac sign
        const zodiacSign = getZodiacSign(new Date(birthdate));

        // Create user
        const user = new User({
            name,
            email,
            password: hashedPassword,
            birthdate,
            zodiacSign
        });

        await user.save();

        // Generate JWT
        const token = jwt.sign({ id: user._id, email: user.email, zodiac: user.zodiacSign }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: 'Signup successful', token });
    } catch (err) {
        console.error('Signup Error:', err);
        res.status(500).send('Server error');
    }
}

export async function login(req, res) {
    const { email, password } = req.body;

    try {
        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send('Invalid credentials');
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }

        // Generate JWT
        const token = jwt.sign({ id: user._id, email: user.email, zodiac: user.zodiacSign }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        res.status(500).send('Server error');
    }
}

export async function logout(req, res) {
    res.send('User Logged out! (client should discard token)');
}