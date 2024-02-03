const router = require("express").Router();
let user = require("../models/user.model");

router.route("/").get((req, res) => {
  user
    .find() // mongoose method that gets list of all users from mongodb database
    .then((users) => res.json(users)) // return users in json format
    .catch((err) => res.status(400).json("Error: " + err)); // return error if error
});

router.route("/add").post((req, res) => {
    const username = req.body.username; // get username from request body   
    const newUser = new user({ username }); // create new instance of user

    newUser.save() // save new user to database
    .then(() => res.json("User added!")) // return message if successful    
    .catch((err) => res.status(400).json("Error: " + err)); // return error if error
});

module.exports = router;
