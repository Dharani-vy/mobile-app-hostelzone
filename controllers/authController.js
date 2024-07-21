// controllers/authController.js

const firebaseAdmin = require('firebase-admin');
const { auth } = require('../firebaseconfig');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Authenticate user using Firebase Authentication
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    
    // If authentication is successful, redirect to homepage
    res.redirect('/homepage');
  } catch (error) {
    // If authentication fails, redirect back to login page with error message
    console.error('Login error:', error);
    res.redirect('/?error=' + encodeURIComponent(error.message));
  }
};

const homepage = (req, res) => {
  res.render('homepage');
};

module.exports = {
  login,
  homepage
};
