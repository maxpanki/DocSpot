import {Schema, model} from 'mongoose'

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isVerified: {type: Boolean, required: true, default: false},
    companyName: {type: String, required: true},
    companySize: {type: String, required: true},
    avatar: {type: String, required: true, default: 'some string'},
    phoneNumber: {type: String},
    address: {type: String},
    coordinates: {type: String}
})

module.exports = model('Company', schema)