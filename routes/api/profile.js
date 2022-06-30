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
        console.log("HI BUDDY",art_id);
        const user = await User.findById(req.user.id);
        let art = await Article.findById(art_id);
        const tmp =user.liked.filter(x => x._id===art_id);
        console.log(tmp); 
        if(!tmp.length > 0){//FUNC???
            console.log("ADD");
            user.liked.remove(art);
        } else {
            console.log("REMOVE");
            user.liked.push(art);
        }
        await user.save();
        res.json("Success");
    } catch(err){
        console.log(err.message);
        res.status(500);
    }
});

// @route PUT api/article/getAny
// @desc manually add article to database
// Private Route
router.put('/unlike/:art_id', auth, async(req, res) => {
    try {
        const {art_id} = req.params; 
        const user = await User.findById(req.user.id);
        let art = await Article.findById(art_id);
        user.liked.remove(art);
        await user.save();
        res.json("Success");
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
        user.read.insert(art);
        await user.save();
        res.json("Success");
    } catch(err){
        console.log(err.message);
        res.status(500);
    }
});

// @route PUT api/article/getAny
// @desc manually add article to database
// Private Route
router.put('/unread/:art_id', auth, async(req, res) => {
    try {
        const {art_id} = req.params; 
        const user = await User.findById(req.user.id);
        let art = await Article.findById(art_id);
        user.read.remove(art);
        await user.save();
        res.json("Success");
    } catch(err){
        console.log(err.message);
        res.status(500);
    }
});

module.exports = router;