const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema( // create new schema
    {
        username: { type: String, required: true, unique: true, trim: true, minlength: 3 },
    },
    { timestamps: true } // create fields for when user created/modified
);

const User = mongoose.model("User", userSchema); // create model

module.exports = User; // export model