import {Router} from 'express'
import {Types} from 'mongoose'

const auth = require('../middleware/auth.middleware')
const Post = require('../models/Post')
const Hashtags = require('../models/Hashtags')
const User = require('../models/User')
const Likes = require('../models/Likes')
const router = Router()

// /api/post/create
router.post(
    '/create',
    auth,
    async (req:any, res:any) => {
        try{
            const body = req.body
            const id = req.user.userId
            const { title, text } = body

            let objForCreate: {[k: string]: any} = {}
            objForCreate.title = title
            objForCreate.text = text
            objForCreate.owner = id
            if (req.files) {
                const {img} = req.files
                img.mv("./client/public/uploads/posts/" + img.name)
                objForCreate.img = img.name
            }

            const hashtagsArray = text.match(/(?<=^|\s)([#@][a-z\d-]+)/ig)
            if (hashtagsArray) {
                for (const tag of hashtagsArray) {
                    if (await Hashtags.find({tag}).count() > 0)
                    {
                        await Hashtags.updateOne({tag: tag}, {
                            $inc: { activity: 1 }
                        })
                    } else {
                        const record = new Hashtags({tag})
                        await record.save()
                    }
                }
            }

            const post = new Post(objForCreate)
            await post.save()
            await User.findByIdAndUpdate(id, {
                $inc: { activities: 5 }
            })

            res.status(201).json({message: 'Post has been added.'})
        } catch (e: any) {
            res.status(500).json({
                message: e.message
            })
        }
    })

// /api/post/getUsersPosts/:id
router.get(
    '/getUsersPosts/:id',
    auth,
    async (req:any, res:any) => {
        try{
            const {id} = req.params

            let candidate = await Post.find({owner: id})
            if (!candidate) {
                return res.status(400).json({ message: 'User not found.'})
            }
            const post = candidate

            res.json({
                post
            })
        } catch (e: any) {
            res.status(500).json({
                message: e.message
            })
        }
    })

// /api/post/getFeedPosts
router.post(
    '/getFeedPosts',
    auth,
    async (req:any, res:any) => {
        try{
            let candidate = await Post.aggregate([
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
            if (!candidate) {
                return res.status(400).json({ message: 'Posts not found.'})
            }

            const posts = candidate.sort((post1: any, post2: any) => {
                const random1 = Math.random()
                const random2 = Math.random()

                const val1 = (post1.activity + (post1.owner[0].activities * 0.25)) * random1
                const val2 = (post2.activity + (post2.owner[0].activities * 0.25)) * random2

                if (val1 > val2) {
                    return -1
                } else {
                    return 1
                }
            })

            res.json({
                posts
            })
        } catch (e: any) {
            res.status(500).json({
                message: e.message
            })
        }
    })

// /api/post/getFeedPosts/:hashtag
router.get(
    '/getFeedPosts/:hashtag',
    auth,
    async (req:any, res:any) => {
        try{
            const {hashtag} = req.params

            let candidate = await Post.aggregate([
                {
                    $match: {
                        $text: { $search: "#" + hashtag },
                    }
                },
                {
                    $sort: {
                        score: { $meta: "textScore" }
                    }
                },
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
            if (!candidate) {
                return res.status(400).json({ message: 'Posts not found.'})
            }

            res.json({
                posts: candidate
            })
        } catch (e: any) {
            res.status(500).json({
                message: e.message
            })
        }
    })

// /api/post/like
router.post(
    '/like',
    auth,
    async (req:any, res:any) => {
        try{
            const body = req.body
            const id = req.user.userId
            const { postId } = body

            const objForCreate = {
                type: 'Post',
                post: postId,
                owner: id
            }

            const like = new Likes(objForCreate)
            await like.save()
            await Post.findByIdAndUpdate(postId, {
                $inc: {
                    activity: 1,
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

// /api/post/dislike
router.post(
    '/dislike',
    auth,
    async (req:any, res:any) => {
        try{
            const body = req.body
            const id = req.user.userId
            const { postId } = body

            await Likes.deleteOne({post: postId, owner: id})
            await Post.findByIdAndUpdate(postId, {
                $inc: {
                    activity: -1,
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

// /api/post/isLiked
router.post(
    '/isLiked',
    auth,
    async (req:any, res:any) => {
        try{
            const body = req.body
            const id = req.user.userId
            const { postId } = body

            const record = await Likes.findOne({post: postId, owner: id})
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