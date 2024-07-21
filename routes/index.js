// routes/index.js

const express = require('express');
const { login, homepage } = require('../controllers/authController');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.render('login'); // Render the login page
});

router.get('/homepage', (req, res) => {
    res.render('homepage'); // Render the homepage
});

router.get('/login', (req, res) => {
    res.render('login'); // Render the login page
});
router.get('/grievances', (req, res) => {
    res.render('grievances'); 
});

router.get('/lab', (req, res) => {
    res.render('lab'); 
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if username and password are valid (dummy example)
    if (username === 'admin@123' && password === 'admin@123') {
        // If credentials are valid, redirect to homepage
        res.redirect('/homepage');
    } else {
        // If credentials are invalid, redirect back to login page with error message
        res.redirect('/login?error=Invalid%20credentials');
    }
});

module.exports = router;
