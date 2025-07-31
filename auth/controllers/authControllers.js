export async function signup(req, res) {
    const {name, email, password, birthdate} = req.body;

    res.status(201).send(`New User {${name} , ${email}, ${password}, ${birthdate}} signedup`);
}

export async function login(req, res) {
    const {email, password} = req.body;

    res.status(200).send('Login successfull!!');
}

export async function logout(req, res) {
    res.send('User Logged out! (client should discard token)');
}