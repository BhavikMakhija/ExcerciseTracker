const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({ 
    exercise:{ type: String, required: true},
    sets:{ type: Number, required: true},
    reps:{ type: Number, required: true},
    date:{ type: Date, required: true},
    username:{ type: String, required: true},
    }
    , { timestamps: true });

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
