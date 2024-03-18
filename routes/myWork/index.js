const express = require('express');
const router = express.Router();
const { myWorkProject } = require('../../database');
const bcrypt = require('bcrypt');
const saltRounds = 10;


router.get('/', (req, res) => {

    myWorkProject.find({}).sort({project_number: 'desc'}).exec()
        .then(result => {
            res.render('myWork/index', {projects: result});
        })
        .catch(err => {
            console.log("Error finding myWorkProject model", err);
        })
});

router.get('/publish', (req, res) => {
    res.render('myWork/publish');
});

router.post('/publish', (req, res) => {
    const {reference_link, img_url, title, description, password} = req.body;
    bcrypt.compare(password, process.env.MYWORK_PUBLISH_PASSWORD_HASH_SLTRD_10, async function(err, authenticated) {
        if (authenticated) {
            let project_number = 0
            await myWorkProject.countDocuments({})
                .then(result => {
                    project_number = result + 1;
                });

            myWorkProject.create({project_number, reference_link, img_url, title, description})
                .then(result => {
                    res.redirect('/myWork');
                })
                .catch(err => {
                    console.log("Error creating myWorkProject model", err);
                })
        } else {
            res.redirect('/');
        }
    })

})




module.exports = router