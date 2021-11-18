const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const path = require('path');

require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const postsRouter = require('./routes/posts.js');
const usersRouter = require('./routes/users.js');

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLECLIENTID,
        clientSecret: process.env.GOOGLECLIENTSECRET,
        callbackURL: 'http://localhost:8080/google/callback', 
        passReqToCallback   : true
      },
      function(request, accessToken, refreshToken, profile, done) {
        console.log(profile);

        return done(null, profile);
                
    }
));

app.use(cookieSession({
  name: 'google-auth-session',
  keys: ['key1', 'key2']
}))

const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

app.use(passport.initialize());
app.use(passport.session());

// could use regex to serve the same file for multiple endpoints, but splitting it up for readability
app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
})

app.get("/home", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
})

app.get("/failed", (req, res) => {
    res.send("Failed")
})

// set http status to authenticated and serve index.html
app.get("/success",isLoggedIn, (req, res) => {
    res.send(`Welcome ${req.user.email}`)
})

// hit this with Login with Google button
app.get('/googleAuth', 
  passport.authenticate('google', {
      scope: ['email', 'profile']
  })
);

app.get('/google/callback',
  passport.authenticate('google', {
      failureRedirect: '/failed',
  }),
  function (req, res) {
      res.redirect('/home');
  }
);

// hit this with Logout button
app.get("/logout", (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})

// api routes
app.use("/posts", postsRouter);
app.use("/users", usersRouter);

app.listen(port, () => console.log("server running on port",  port))