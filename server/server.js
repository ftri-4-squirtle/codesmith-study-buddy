const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');

require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const apiRouter = require('./routes/api.js');

const app = express();

app.use(express.json());

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
        done(null, user);
});

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLECLIENTID,
        clientSecret: process.env.GOOGLECLIENTSECRET,
        callbackURL: "http://localhost:8080/google/callback",
        passReqToCallback   : true
    },
    function(request, accessToken, refreshToken, profile, done) {
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

const port = 8080;

app.get("/", (req, res) => {

    // serve index.html

    res.json({message: "You are not logged in"})
})

app.get("/failed", (req, res) => {
    res.send("Failed")
})

// set http status to authenticated and serve index.html
app.get("/success",isLoggedIn, (req, res) => {
    res.send(`Welcome ${req.user.email}`)
})


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
    res.status(401).send({message: 'Unauthorized'});
}
);

app.get("/logout", (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})

// api routes
app.use("/api", apiRouter);

app.listen(port, () => console.log("server running on port",  port))