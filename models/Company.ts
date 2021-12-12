import {Schema, model} from 'mongoose'

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isVerified: {type: Boolean, required: true, default: false},
    companyName: {type: String, required: true},
    companySize: {type: String, required: true},
})

module.exports = model('Company', schema)