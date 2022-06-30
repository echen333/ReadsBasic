const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const Article = require('../../models/Article');

// @route GET api/scrape/paulgraham
// @desc 
router.get('/paulgraham', async(req, res) => {
    try {

        // fetchHtml('heresy.html');
        // fetchHtml('words.html');
        // fetchHtml('goodtaste.html');
        // fetchHtml('smart.html');
        // fetchHtml('weird.html');
        // fetchHtml('hwh.html');
        // fetchHtml('own.html');
        // fetchHtml('fn.html');
        fetchHtml('newideas.html');
        fetchHtml('nft.html');
        fetchHtml('real.html');
        fetchHtml('richnow.html');
        fetchHtml('simply.html');
        fetchHtml('donate.html');
        fetchHtml('worked.html');
        fetchHtml('earnest.html');
        fetchHtml('ace.html');
        fetchHtml('airbnbs.html');
        fetchHtml('think.html');
        // axios.get('http://www.paulgraham.com/heresy.html')
        //     .then((response) => {
        //         if(response.status === 200) {
        //         const html = response.data;
        //         const $ = cheerio.load(html); 
        //         console.log(html);
        //     }
        //     }, (error) => console.log(err) );

        res.json("SUCCESS");

    } catch(err){
        console.log(err.message);
        res.status(500);
    }
});

const fetchHtml = async (essay) => {
    try {
        const text = await axios.get(`http://www.paulgraham.com/${essay}`);
        // console.log(text.data);
        let html = text.data
        const $ = cheerio.load(html);
    
        $firstImageWithAlt = $('img[alt]').first();
        const title = $firstImageWithAlt.toArray()[0].attribs.alt;
    
        let essayHtml = $('font').html()
        if (essayHtml.includes('Want to start a startup?')) {
            essayHtml = $('p').html()
        }
        let chapter = essayHtml;
        // console.log(title, chapter);

        console.log("ADDED ARTICLE");
        const newArticle = new Article({
            link:`http://www.paulgraham.com/${essay}`,
            title: title,
            text: chapter

        })
        await newArticle.save();
        return { title, chapter }
    } catch (error) {
        console.log(error)
    }
};
  


module.exports = router;