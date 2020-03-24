const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Author name is required"]
    },
    image:{
        type: String,
        required:[true, "Image is required"]
    },
    treasureChests:{
        type: Number,
        default: 1
    },
    catchPhrase:{
        type:String,
        required:[true, "Catch Phrase is required"]
    },
    crewPosition:{
        type:String,
        default:"Captain"
    },
    pegLeg:{
        type: Boolean,
        default: true
    },
    eyePatch:{
        type: Boolean,
        default: true
    },
    hookHand:{
        type: Boolean,
        default: true
    }
}, { timestamps: true});

module.exports = PirateSchema;
module.exports.Pirate = mongoose.model("Pirate", PirateSchema)

