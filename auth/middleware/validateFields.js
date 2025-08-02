export function validateSignup(req, res, next) {
    const { name, email, password, birthdate } = req.body;

    if (!name || !email || !password || !birthdate) {
        return res.status(400).send('All signup fields are required');
    }

    if (typeof name !== 'string' || !name.trim()) {
        return res.status(400).send('Name must be a non-empty string');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof email !== 'string' || !emailRegex.test(email.trim())) {
        return res.status(400).send('Invalid email format');
    }

    if (typeof password !== 'string' || password.length < 6) {
        return res.status(400).send('Password must be at least 6 characters');
    }

    if (isNaN(Date.parse(birthdate))) {
        return res.status(400).send('Invalid birthdate');
    }

    next();
}

export function validateLogin(req, res, next) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Email and Password are required');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof email !== 'string' || !emailRegex.test(email.trim())) {
        return res.status(400).send('Invalid email format');
    }

    if (typeof password !== 'string' || !password) {
        return res.status(400).send('Password is required');
    }

    next();
}