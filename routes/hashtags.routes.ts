import {Router} from 'express'

const auth = require('../middleware/auth.middleware')
const router = Router()
const Hashtags = require('../models/Hashtags')

// /api/hashtags/getPopular
router.post(
    '/getPopular',
    auth,
    async (req:any, res:any) => {
        try{
            let tags = await Hashtags.find().sort({activity:-1}).limit(5)
            if (!tags) {
                return res.status(400).json({ message: 'User not found.'})
            }

            res.status(201).json({
                tags: tags
            })
        } catch (e: any) {
            res.status(500).json({
                message: e.message
            })
        }
    })

module.exports = router