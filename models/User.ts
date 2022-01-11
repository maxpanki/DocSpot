import {Schema, model, Types} from 'mongoose'

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    isVerified: {type: Boolean, required: true, default: false},
    companyName: {type: String},
    companySize: {type: String},
    personName: {type: String},
    personSecondName: {type: String},
    position: {type: String},
    phoneNumber: {type: String},
    address: {type: String},
    location: {type: String},
    avatar: {type: String, required: true, default: 'defaultAvatar.bmp'},
    activities: {type: Number, required: true, default: 0},
    workingPlace: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('User', schema)