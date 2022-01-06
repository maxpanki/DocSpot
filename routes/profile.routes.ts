import {Router} from 'express'

const auth = require('../middleware/auth.middleware')
const User = require('../models/User')
const Company = require('../models/Company')
const router = Router()

// /api/profile/:id
router.get(
    '/:id',
    auth,
    async (req:any , res:any) => {
        try {
            const {id} = req.params

            let candidate = await User.findById(id)
            if (!candidate) {
                candidate = await Company.findById(id)
                if (!candidate) {
                    return res.status(400).json({ message: 'User not found.'})
                }
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

module.exports = router