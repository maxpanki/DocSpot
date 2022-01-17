import {Router} from 'express'

const auth = require('../middleware/auth.middleware')
const router = Router()
const Conversation = require('../models/Conversation')
const Message = require('../models/Message')

// /api/messenger/newConversation
router.post(
    '/newConversation',
    auth,
    async (req:any, res:any) => {
        try{
            const senderId = req.user.userId
            const {receiverId} = req.body

            const newConversation = new Conversation({
                members:[senderId, receiverId]
            })
            await newConversation.save()

            res.status(201).json({
                message: 'Conversation has been started.'
            })
        } catch (e: any) {
            res.status(500).json({
                message: e.message
            })
        }
    })

// /api/messenger/getUsersConversations
router.post(
    '/getUsersConversations',
    auth,
    async (req:any, res:any) => {
        try{
            const userId = req.user.userId

            const conversations = await Conversation.find({
                members: { $in:[userId] }
            })

            res.status(201).json({
                conversations
            })
        } catch (e: any) {
            res.status(500).json({
                message: e.message
            })
        }
    })

// /api/messenger/addMessage
router.post(
    '/addMessage',
    auth,
    async (req:any, res:any) => {
        try{
            const owner = req.user.userId
            const { text, conversationId } = req.body

            const newMessage = new Message({
                text,
                conversationId,
                owner
            })
            const savedMessage = await newMessage.save()

            res.status(201).json({
                savedMessage
            })
        } catch (e: any) {
            res.status(500).json({
                message: e.message
            })
        }
    })

// /api/messenger/getMessages
router.post(
    '/getMessages',
    auth,
    async (req:any, res:any) => {
        try{
            const { conversationId } = req.body

            const messages = await Message.find({
                conversationId: conversationId
            })

            res.status(201).json({
                messages
            })
        } catch (e: any) {
            res.status(500).json({
                message: e.message
            })
        }
    })

module.exports = router