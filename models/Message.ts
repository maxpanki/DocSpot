import {Schema, model, Types} from 'mongoose'

const schema = new Schema({
    conversationId: { type: Types.ObjectId, ref: 'Conversation', required: true },
    owner: { type: Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true }
    }
)

module.exports = model('Message', schema)