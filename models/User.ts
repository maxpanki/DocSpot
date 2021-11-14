import {Schema, model} from 'mongoose'

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    isVerified: {type: Boolean, required: true, default: false}
})

module.exports = model('User', schema)