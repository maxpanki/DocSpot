import {Schema, model, Types} from 'mongoose'

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    isVerified: {type: Boolean, required: true, default: false},
    personName: {type: String, required: true},
    personSecondName: {type: String, required: true},
    workingPlace: {type: Types.ObjectId, ref: 'Company'}
})

module.exports = model('User', schema)