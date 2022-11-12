const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const validator = require('validator')

const buildInfoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true })

buildInfoSchema.statics.check1 = async function (title, desc, contact, email, price) {

    //validator


    // if (!validator.isEmail(email)) {
    //     throw Error("Email is not valid")
    // }
    // if (!email || !title || !contact || !price || !desc) {
    //     throw Error("All field must be filled")
    // }
    const Correct = await this.create({ title, desc, contact, email, price })
    return Correct

}











module.exports = mongoose.model('BuildInfo', buildInfoSchema);