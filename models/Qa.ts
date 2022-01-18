import {Schema, model, Types} from 'mongoose'

const schema = new Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    img: {type: String},
    date: {type: Date, required: true, default: new Date()},
    owner: {type: Types.ObjectId, ref: 'User', required: true}
})

module.exports = model('Qa', schema)