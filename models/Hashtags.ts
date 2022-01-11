import {Schema, model} from 'mongoose'

const schema = new Schema({
    tag: {type: String, required: true},
    activity: {type: Number, required: true, default: 1}
})

module.exports = model('Hashtags', schema)