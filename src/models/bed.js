const mongoose = require('mongoose')

const bedSchema = new mongoose.Schema({
    type: {
        type: String,
        trim: true,
        maxLength: 25
    },

    status: {
        type: String,
        trim: true,
        maxLength: 25
    },

    description: {
        type: String,
        trim: true,
        maxLength: 100
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

const Bed = mongoose.model('bed', bedSchema)
module.exports = Bed