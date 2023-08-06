const User = require('../models/users.model.js');
const bcrypt = require('bcryptjs');
const createAccessToken = require('../libs/jwt.js');
const user = require('../models/users.model.js');

// Controller to register an user
const register = async (req, res) => {
    // Destructuring the fields required by this method
    const { username, email, password } = req.body;

    try {
        // Encrypt a password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Creating an user by invoke the new User constructor provided by the User model
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Saving the new user in the db and receiving the content saved
        const userSaved = await newUser.save();
        // Creating the jwt to provide authorization navigation for the user
        const token = await createAccessToken({
            id: userSaved.id,
            username: userSaved.username,
            email: userSaved.email
        });
        // Returning and saving the jwt in the client using a cookie
        res.cookie('jwt_token', token);
        // Returning a 201 response to the client
        res.status(201).json({
            message: "User created successfully!",
            user: {
                id: userSaved.id,
                username: userSaved.username,
                email: userSaved.email
            }
        });
    } catch (err) {
        // Returning the 400 response error to the client
        res.status(400).json({
            message: err.message
        });
    };
};

// Controller to login an user
const login = async (req, res) => {
    // Destructuring the fields required by this method
    const { email, password } = req.body;

    try {
        // Querying the db to find the email is registered
        const userFound = await User.findOne({ email });

        // If the user is not found then returns a 400 status and a message
        if (!userFound) return res.status(400).send({ message: 'User not found!' });

        // Compares the password given with the password saved in the db
        const isMatch = await bcrypt.compare(password, userFound.password);

        // If the user password not match then returns a 400 status and a message
        if (!isMatch) return res.status(401).send({ message: 'Invalid user!' });

        // Creating the jwt to provide authorization navigation for the user
        const token = await createAccessToken({
            id: userFound.id,
            username: userFound.username,
            email: userFound.email
        });
        // Returning and saving the jwt in the client using a cookie
        res.cookie('jwt_token', token);
        // Returning a 200 response to the client
        return res.status(200).json({
            message: "User logged successfully!",
            user: {
                id: userFound.id,
                username: userFound.username,
                email: userFound.email
            }
        });
    } catch (err) {
        // Returning the 400 response error to the client
        return res.status(400).json({
            message: err.message
        });
    };
};

// Controller to logout an user
const logout = (req, res) => {
    // Clearing the cookie called jwt_token and setting the expire time to now
    res.cookie('jwt_token', "", {
        expires: new Date(0)
    });
    // Returning a 200 code status to the client
    return res.sendStatus(200);
};

const profile = async (req, res) => {
    // Querying to the db if exists an user with this id
    const userFound = await User.findById(req.user.id);

    // If the user doesn't exists return a 400 status code and a message
    if (!userFound) return res.status(400).json({ message: 'User not found!' });

    // If everything is okay return a 200 status code and the user info to be use by the client
    return res.status(200).json({
        message: "Authorized!",
        user: {
            id: userFound.id,
            username: userFound.username,
            email: userFound.email
        }
    });
};

module.exports = { register, login, logout, profile }