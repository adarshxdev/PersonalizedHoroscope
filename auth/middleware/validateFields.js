export function validateSignup(req, res, next) {
    const { name, email, password, birthdate } = req.body;

    if(!name || !email || !password || !birthdate){
        return res.status(400).send('All signup fields are required');
    }

    next();
}

export function validateLogin(req, res, next) {
    const { email, password } = req.body;
    
    if(!email || !password){
        res.status(400).send('Email and Password are required');
    }

    next();
}