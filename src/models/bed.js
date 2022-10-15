const mongoose = require('mongoose')

const bedSchema = new mongoose.Schema({
    bedType: {
        type: String,
        maxLength: 25
    },

    bedStatus: {
        type: String,
        maxLength: 25
    },

    bedStatusDescript: {
        type: String,
        maxLength: 50
    }

    //To add patient ID & WARD ID(FOREIGN-KEYS)

},
{ timestamps: true }
)

bedSchema.set('toJSON', {
    transform: (document, returnedObject) => {
     returnedObject.id = returnedObject._id.toString()
     delete returnedObject._id
     delete returnedObject.__v
     // the password should not be revealed
     delete returnedObject.password
    }
})

const BED = mongoose.model('bed', bedSchema)
module.exports = BED