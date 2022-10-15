const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    patientName:{
        type: String,
        maxLength: 25
    },

    patientPhone:{
        type: String,
        maxLength: 7 
    },

    patientDOB:{
    type: new Date([1995, 11, 19]) //parameter: year, month, and day(int_value_format) 
    },

    patientDiagnosis:{
        type: String,
        maxLength: 50
    }

    //To add user ID(FOREIGN-KEY)
}, 
{ timestamps: true }
)

patientSchema.set('toJSON', {
    transform: (document, returnedObject) => {
     returnedObject.id = returnedObject._id.toString()
     delete returnedObject._id
     delete returnedObject.__v
     // the password should not be revealed
     delete returnedObject.password
    }
})

const PATIENT = mongoose.model('patient', patientSchema)
module.exports = PATIENT