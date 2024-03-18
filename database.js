const mongoose = require('mongoose');
require('dotenv').config();

exports.MongooseConnection = () => {
    mongoose.connect(process.env.MONGODB_URI);
}

const myWorkSchema = new mongoose.Schema({
    project_number: {
        type: Number,
        required: true,
        unique: true
    },
    reference_link: {
        type: String,
        unique: true
    },
    img_url: {
        type: String,
        unique: true
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    }
})

exports.myWorkProject = mongoose.model('myWorkProject', myWorkSchema);


