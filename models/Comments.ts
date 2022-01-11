import {Schema, model, Types} from 'mongoose'

const schema = new Schema({
    text: {type: String, required: true},
    likes: {type: Number, required: true, default: 0},
    date: {type: Date, required: true, default: new Date()},
    post: {type: Types.ObjectId, ref: 'Post', required: true},
    owner: {type: Types.ObjectId, ref: 'User', required: true}
})

module.exports = model('Comments', schema)