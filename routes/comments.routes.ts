import {Router} from 'express'
import {Types} from 'mongoose'

const auth = require('../middleware/auth.middleware')
const Comments = require('../models/Comments')
const Likes = require('../models/Likes')
const User = require('../models/User')
const router = Router()

// /api/comments/create
router.post(
    '/create',
    auth,
    async (req:any, res:any) => {
        try{
            const body = req.body
            const id = req.user.userId
            const { text, post } = body

            const objForCreate = {
                text: text,
                owner: id,
                post: post
            }

            const comment = new Comments(objForCreate)
            await comment.save()
            await User.findByIdAndUpdate(id, {
                $inc: { activities: 3 }
            })

            res.status(201).json({message: 'Comment has been added.'})
        } catch (e: any) {
            res.status(500).json({
                message: e.message
            })
        }
    })

// /api/comments/get
router.post(
    '/get',
    auth,
    async (req:any, res:any) => {
        try{
            const body = req.body
            const id = req.user.userId
            const { post } = body

            const comments = await Comments.aggregate([
                { $match: { post: new Types.ObjectId(post)} },
                {
                    $lookup:
                        {
                            from: "users",
                            localField: "owner",
                            foreignField: "_id",
                            as: "owner"
                        }
                }
            ])
            if (!comments) {
                return res.status(201).json({ message: 'No posts where found'})
            }

            res.json({
                comments
            })
        } catch (e: any) {
            res.status(500).json({
                message: e.message
            })
        }
    })

// /api/comments/like
router.post(
    '/like',
    auth,
    async (req:any, res:any) => {
        try{
            const body = req.body
            const id = req.user.userId
            const { commentId } = body

            const objForCreate = {
                type: 'Comment',
                comment: commentId,
                owner: id
            }

            const like = new Likes(objForCreate)
            await like.save()
            await Comments.findByIdAndUpdate(commentId, {
                $inc: {
                    likes: 1
                }
            })
            await User.findByIdAndUpdate(id, {
                $inc: { activities: 1 }
            })

            res.status(201).json({message: 'Like was recorded.'})
        } catch (e: any) {
            res.status(500).json({
                message: e.message
            })
        }
    })

// /api/comments/dislike
router.post(
    '/dislike',
    auth,
    async (req:any, res:any) => {
        try{
            const body = req.body
            const id = req.user.userId
            const { commentId } = body

            await Likes.deleteOne({comment: commentId, owner: id})
            await Comments.findByIdAndUpdate(commentId, {
                $inc: {
                    likes: -1
                }
            })
            await User.findByIdAndUpdate(id, {
                $inc: { activities: -1 }
            })

            res.status(201).json({message: 'Dislike was recorded.'})
        } catch (e: any) {
            res.status(500).json({
                message: e.message
            })
        }
    })

// /api/comments/isLiked
router.post(
    '/isLiked',
    auth,
    async (req:any, res:any) => {
        try{
            const body = req.body
            const id = req.user.userId
            const { commentId } = body

            const record = await Likes.findOne({comment: commentId, owner: id})
            const isLiked = !!record

            res.status(201).json({
                message: isLiked
            })
        } catch (e: any) {
            res.status(500).json({
                message: e.message
            })
        }
    })

module.exports = router