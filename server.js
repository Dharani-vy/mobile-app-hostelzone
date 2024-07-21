const express = require('express');
const path = require('path'); // Import the path module
const firebaseAdmin = require('firebase-admin');
const indexRouter = require('./routes/index.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Check if the Firebase app has already been initialized
if (!firebaseAdmin.apps.length) {
  const serviceAccount = require('./serviceAccountKey.json');
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount)
  });
}

// Set the view engine to use EJS
app.set('view engine', 'ejs');

// Specify the directory where your views are located
app.set('views', path.join(__dirname, 'public','views'));

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', indexRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
