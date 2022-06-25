const express = require('express');
const router = express.Router();
const passport = require('passport');


const User = require('../../models/User')

// @route GET api/profile/me
// @desc 
router.get('/me', async(req, res) => {
    try {
        res.json("Success");

    } catch(err){
        console.log(err.message);
        res.status(500);
    }
});


module.exports = router;