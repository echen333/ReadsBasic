const express = require('express');
const router = express.Router();

const Test = require('../../models/Test')

// @route POST api/test/addVal
// @desc 
router.post('/addVal', async(req, res) => {
    try {
        const newItem = new Test({
            buttonValue: req.body.buttonVal
        })
        const buttonTest = await newItem.save();

        res.json(buttonTest);

    } catch(err){
        console.log(err.message);
        res.status(500);
    }
});


module.exports = router;