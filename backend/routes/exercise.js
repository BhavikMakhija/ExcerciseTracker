const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Exercise.find() // mongoose method that gets list of all exercises from mongodb database
    .then((exercises) => res.json(exercises)) // return exercises in json format
    .catch((err) => res.status(400).json("Error: " + err)); // return error if error
});

router.route("/add").post((req, res) => {
    const exercise = req.body.exercise; // get exercise from request body
    const sets = Number(req.body.sets); // get sets from request body
    const reps = Number(req.body.reps); // get reps from request body
    const date = Date.parse(req.body.date); // get date from request body
    const username = req.body.username; // get username from request body
    
    const newExercise = new Exercise({
        exercise,
        sets,
        reps,
        date,
        username,
    }); // create new instance of exercise
    
    newExercise
        .save() // save new exercise to database
        .then(() => res.json("Exercise added!")) // return message if successful
        .catch((err) => res.status(400).json("Error: " + err)); // return error if error
    });

router.route("/:id").get((req, res) => {
    Exercise.findById(req.params.id) // mongoose method that gets exercise with specific id from mongodb database
        .then((exercise) => res.json(exercise)) // return exercise in json format
        .catch((err) => res.status(400).json("Error: " + err)); // return error if error
    });

router.route("/:id").delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id) // mongoose method that deletes exercise with specific id from mongodb database
        .then(() => res.json("Exercise deleted.")) // return message if successful
        .catch((err) => res.status(400).json("Error: " + err)); // return error if error
    }
);

router.route("/update/:id").post((req, res) => {
    Exercise.findById(req.params.id) // mongoose method that gets exercise with specific id from mongodb database
        .then((exercise) => {
            exercise.exercise = req.body.exercise; // set exercise to exercise from request body
            exercise.sets = Number(req.body.sets); // set sets to sets from request body
            exercise.reps = Number(req.body.reps); // set reps to reps from request body
            exercise.date = Date.parse(req.body.date); // set date to date from request body
            exercise.username = req.body.username; // set username to username from request body

            exercise
                .save() // save updated exercise to database
                .then(() => res.json("Exercise updated!")) // return message if successful
                .catch((err) => res.status(400).json("Error: " + err)); // return error if error
        })
        .catch((err) => res.status(400).json("Error: " + err)); // return error if error
    }
);
 
    module.exports = router;
