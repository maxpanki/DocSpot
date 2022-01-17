import {Schema, model, Types} from 'mongoose'

const schema = new Schema({
    type: {type: String, required: true},
    comment: {type: Types.ObjectId, ref: 'Comments'},
    post: {type: Types.ObjectId, ref: 'Post'},
    owner: {type: Types.ObjectId, ref: 'User', required: true}
})

module.exports = model('Likes', schema)