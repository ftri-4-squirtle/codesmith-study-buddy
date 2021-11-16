// bringing express into our project
const express = require('express');
// bringing cookie-session to our project
const cookieSession = require('cookie-session');
// bringing passport into our project
const passport = require('passport');
// bringing a Google "plugin" or Strategy that interacts with Passport
const GoogleStrategy = require('passport-google');
// brining in our getUser and createUser methods from our database methods file
const { getUser, createUser } = require('../db/methods');

// initializing our app by invoking express
const app = express();

// initialize passport to be used
app.use(passport.initialize());
// using session cookies
app.use(passport.session());
// using cookieSession in our app
app.use(cookieSession({
  // age of the cookie in milliseconds
     // cookie will last for one day
  maxAge: 24 * 60 * 60 * 1000,
  // encrypts the user id
  keys: [process.env.COOKIEKEY],
}));
// setting up our serialize and deserialize methods from passport
passport.serializeUser((user, done) => {
  // calling done method once we get the user from the db
  done(null, user.googleid);
});

passport.deserializeUser((id, done) => {
  // need to find user by id
  getUser(id)
    .then(currentUser => {
      // calling done once we've found the user
      done(null, currentUser[0]);
    });
});

// setting our login and redirect routes
app.get('/login', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

app.get('/googleRedirect', passport.authenticate('google'), (req, res) => {
  // will redirect once the request has been handled
  res.redirect('/profile');
});

// setting up our Google Strategy when we get the profile info back from Google
passport.use(new GoogleStrategy({
  // options for the google strategy
  callbackURL: '/googleRedirect',
  clientID: process.env.GOOGLECLIENTID,
  clientSecret: process.env.GOOGLECLIENTSECRET,
}, (accessToken, refreshToken, profile, done) => {
  // passport callback function
  const {
    id: googleId, 
    displayName: username, 
    given_name: firstName, 
    family_name: lastName, 
    picture: photo, 
    email: email,
  } = profile;

  const user = {
    googleId,
    username,
    firstName,
    lastName,
    photo,
    email,
  };

  getUser(googleId)
    .then(currentUser => {
      currentUser;

      // if the response includes a user object from our database
      if (currentUser.length) {
        done(null, currentUser[0]);
      } else {
      // if not, create a new user in the database
        createUser(user);
        getUser(googleId)
          .then(newUser => {
            newUser;
            done(null, newUser[0]);
          })
          .catch(err => console.log(err));
      }
    });
}));

// assigning the port to 8000
const port = 8000;

// calling the listen method on app with a callback that will execute if the server is running and tell us what port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});