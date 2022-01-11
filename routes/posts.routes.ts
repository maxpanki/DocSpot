import {Router} from 'express'

const auth = require('../middleware/auth.middleware')
const Post = require('../models/Post')
const Hashtags = require('../models/Hashtags')
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

            const user = new Post(objForCreate)
            await user.save()

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

module.exports = router