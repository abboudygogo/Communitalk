// Import express
const express = require('express');
// Invoke the router()
const router = express.Router();
// Import FeedsModel
const FeedsModel = require('../models/FeedsModel');

// A POST route for saving data into the 'feeds' collection
router.post(
    '/',
    (req, res) => {

        // Read the 'Body' within POST request
        const formData = {
            text: req.body.text,
            username: req.body.username,
            hashtags: req.body.hashtags,
            image: req.body.image
        };

        // Save the data to database (feeds collection)
        const newFeedModel = new FeedsModel(formData);
        newFeedModel.save();

        res.send('Your POST has been received.');
    }
);

// Post route for likes page
router.post(
    '/likes',
    (req, res) => {

        const formData = {
            id: req.body.id,
            hashtags: req.body.hashtags,
            text: req.body.text,
            username: req.body.text,
            likes: req.body.likes,
            image: req.body.image,
            date: req.body.date
        };

        // Save the data to database (feeds collection)
        const likesModel = new FeedsModel(formData);
        likesModel.update(
            {likes: formData.id},
            (err, id) => {

                if(!id) {
                    res.send("You can like this post");
                }
                else {
                    res.send("Your like has already been registered!");
                }
                
            }
        );
    }
);

// A GET route for fetching data from the 'feeds' collection
router.get(
    '/',
    (req, res)=>{

        // (1) Fetch all the documents using .find()
        FeedsModel.find()

        // (2) Once the results are ready, use .json() to send the results
        .then(
            (results) => {
                // res.json = res.send() + converts to JSON
                res.json(results)
            }
        )
        .catch( 
            (e)=> {
                console.log('error occured', e)
            }
        );

    }
);

module.exports = router;
