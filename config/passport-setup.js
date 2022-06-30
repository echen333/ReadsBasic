const passport = require('passport')
const User = require('../models/User')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const config = require('config')

passport.serializeUser(function(user, done) {
    done(null, user.id); 
});
  
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

passport.use(new GoogleStrategy({
    clientID:     config.get('googleClientID'),
    clientSecret: config.get('googleSecretID'),
    callbackURL: "http://localhost:5000/api/auth/google/callback",
    passReqToCallback   : true
  },
  async (request, accessToken, refreshToken, profile, done) => {
    try {
        // console.log(profile);
        let user = await User.findOne({ googleId: profile.id})
        if(user){
            return done(null, user);
        }
        user = new User({
            googleId: profile.id,
            profileImageUrl: profile.picture,
            name: profile.displayName,
            email: profile.emails[0].value
        })
        await user.save();
        return done(null, user);
    } catch(err) {
        return done(err)
    }
  }
));
