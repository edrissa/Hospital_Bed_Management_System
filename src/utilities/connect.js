const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/HOSPITAL_Bed_MGT_SYSTEM';

const connect = () => {
    return mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    })
};

module.exports = connect;