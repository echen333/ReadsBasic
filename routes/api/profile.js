const express = require('express');
const Article = require('../../models/Article');
const router = express.Router();

const auth = require('../../middleware/auth');

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

//Private: like, unlike, read, unread, getXunreadArticles

// @route PUT api/article/getAny
// @desc manually add article to database
// Private Route
router.put('/like/:art_id', auth, async(req, res) => {
    try {
        const {art_id} = req.params; 
        const user = await User.findById(req.user.id)
            .populate('liked')
            .populate('read');
        let art = await Article.findById(art_id);
        const tmp = user.liked.filter(x => x._id.equals(art._id));
        if((tmp.length > 0)){
            console.log("REMOVE");
            user.liked.remove(art);
        } else {
            console.log("ADD");
            user.liked.push(art);
        }
        // console.log(user);
        await user.save();
        res.json(user);
    } catch(err){
        console.log(err.message);
        res.status(500);
    }
});


// @route PUT api/article/getAny
// @desc manually add article to database
// Private Route
router.put('/read/:art_id', auth, async(req, res) => {
    try {
        const {art_id} = req.params; 
        const user = await User.findById(req.user.id);
        let art = await Article.findById(art_id);
        const tmp = user.read.filter(x => x._id.equals(art._id));
        if((tmp.length > 0)){
            console.log("REMOVE");
            user.read.remove(art);
        } else {
            console.log("ADD");
            user.read.push(art);
        }
        await user.save();
        res.json(user);
    } catch(err){
        console.log(err.message);
        res.status(500);
    }
});

module.exports = router;