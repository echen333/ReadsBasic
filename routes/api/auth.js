const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../../models/User');

// @route GET api/auth/me
// @desc 
router.get('/me', async(req, res) => {
    try {
        res.json("Success");

    } catch(err){
        console.log(err.message);
        res.status(500);
    }
});

router.get('/google/success', async(req, res) =>{
    console.log("HI");
    res.json("SUCESS");
});

router.get('/google/failure', function(req, res){
    res.json("LOGIN FAILED");
});

router.get(
    '/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

 
router.get( '/google/callback', passport.authenticate('google', {
      failureRedirect: '/api/auth/login/failed'
    }),
    (req, res) => {
      res.redirect('http://localhost:3000/');
    }
  );


module.exports = router;