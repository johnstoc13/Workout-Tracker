const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatsSchema = new Schema({
    duration: {
        type: Number,
        unique: true
    },
    weight: {
        type: Number,
        unique: true
    },
    reps: {
        type: Number,
        unique: true
    },
    sets: {
        type: Number,
        unique: true
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
});

const Stats = mongoose.model("Stats", StatsSchema);

module.exports = Stats;
