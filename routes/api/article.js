const express = require('express');
const router = express.Router();

const Article = require('../../models/Article')
const User = require('../../models/User')

// @route POST api/article/addNewArticle
// @desc manually add article to database
router.post('/addNew', async(req, res) => {
    try {
        const newArticle = new Article({
            link: req.body.link,
            title: req.body.title,
            text: req.body.text
        })
        await newArticle.save();
        res.json(newArticle);
    } catch(err){
        console.log(err.message);
        res.status(500);
    }
});

// @route GET api/article/getAny
// @desc return x random articles
router.get('/getAny/:numGet', async( { params: { numGet } }, res) => {
    try {
        // console.log("HI", numGet);
        const ret = await Article.aggregate([
            { $sample: { size: 5 } } //how to do variable
        ])
        // console.log(ret[0].title);
        res.json(ret);
    } catch(err){
        console.log(err.message);
        res.status(500);
    }
});

module.exports = router;