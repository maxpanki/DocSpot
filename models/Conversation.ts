import {Schema, model} from 'mongoose'

const schema = new Schema({
    members: { type: Array, required: true },
    type: {type: String, required: true, default: 'Basic'},
    secretName: {type: String}
})

module.exports = model('Conversation', schema)