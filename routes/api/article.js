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
router.get('/getAny', async(req, res) => {
    try {
        const ret = await Article.aggregate([
            { $sample: { size: req.body.numGet } }
        ])
        res.json(ret);
    } catch(err){
        console.log(err.message);
        res.status(500);
    }
});

//Private: like, unlike, read, unread, getXunreadArticles

// // @route PUT api/article/getAny
// // @desc manually add article to database
// // Private Route
// router.put('/like/:art_id', auth, async(req, res) => {
//     try {
//         const {art_id} = req.params; 
//         const user = await User.findById(req.user.id);
//         user.liked.

//         res.json(ret);
//     } catch(err){
//         console.log(err.message);
//         res.status(500);
//     }
// });

module.exports = router;