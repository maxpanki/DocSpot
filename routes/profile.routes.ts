import {Router} from 'express'
import * as bcryptjs from "bcryptjs";

const auth = require('../middleware/auth.middleware')
const User = require('../models/User')
const Post = require('../models/Post')
const router = Router()

// /api/profile/edit
router.post(
    '/edit',
    auth,
    async (req:any, res:any) => {

            const body = req.body
            const id = req.user.userId

            let objForUpdate: {[k: string]: any} = {}
            if (body.email) objForUpdate.email = body.email
            if (body.companySize) objForUpdate.companySize = body.companySize
            if (body.location) objForUpdate.location = body.location
            if (body.address) objForUpdate.address = body.address
            if (body.phoneNumber) objForUpdate.phoneNumber = body.phoneNumber
            if (body.position) objForUpdate.position = body.position

            if (req.files) {
                const {avatar} = req.files
                avatar.mv("./client/public/uploads/" + avatar.name)
                objForUpdate.avatar = avatar.name
            }
            if (body.password && body.password === body.confirmPassword) {
                const hashedPassword = await bcryptjs.hash(body.password, 12)
                objForUpdate.password = hashedPassword
            }

            const user = await User.findByIdAndUpdate(id, objForUpdate)
            if (!user) {
                return res.status(400).json({ message: 'User not found.'})
            }
            res.status(201).json({message: 'Your data has been changed.'})


    })

// /api/profile/
router.post(
    '/',
    auth,
    async (req:any , res:any) => {
        try {
            const {id} = req.body

            let candidate = await User.findById(id)
            if (!candidate) {
                return res.status(400).json({ message: 'User not found.'})
            }
            const user = candidate

            res.json({
                user
            })

        } catch (e) {
            res.status(500).json({
                message: 'Something went wrong, please try again later.'
            })
        }
    })

// /api/profile/getPostActivity
router.post(
    '/getPostActivity',
    auth,
    async (req:any , res:any) => {
        try {
            const {userId} = req.body

            let candidate = await Post.find({owner: userId})
            if (!candidate) {
                return res.status(400).json({ message: 'Posts not found.'})
            }
            let postsActivity = 0
            candidate.map((post: any) => {
                postsActivity += post.activity
            })

            res.json({
                postsActivity
            })

        } catch (e) {
            res.status(500).json({
                message: 'Something went wrong, please try again later.'
            })
        }
    })

module.exports = router