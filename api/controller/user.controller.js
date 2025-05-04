import bcrypt from 'bcrypt';
import User from '../models/User.js';

const register = async (req, res) => {
    console.log("Registering user:", req.body);

    if ( !req.body || !req.body.username || !req.body.password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }


    const { username, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    try {
        const savedUser = await User.create(
            {
                username,
                password: hashedPassword,
            }
        );
        console.log("Saved user:", savedUser);
        return res.status(200).json({ message: 'User registered successfully'});
    }
    catch (err) {
        console.error("Error saving user:", err);
        return res.status(500).json({ message: 'Error saving user: ${error}' });
    }

    
 };

export default { register };