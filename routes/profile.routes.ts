import {Router} from 'express'
import bcryptjs from "bcryptjs";

const auth = require('../middleware/auth.middleware')
const User = require('../models/User')
const router = Router()
const jwt = require('jsonwebtoken')

// /api/profile/edit
router.post(
    '/edit',
    auth,
    async (req:any, res:any) => {

            const body = req.body
            const token = body.token
            const id = jwt.decode(token).userId

            let objForUpdate: {[k: string]: any} = {}
            if (body.email) objForUpdate.email = body.email
            if (body.companySize) objForUpdate.companySize = body.companySize
            if (body.location) objForUpdate.location = body.location
            if (body.address) objForUpdate.address = body.address
            if (body.phoneNumber) objForUpdate.phoneNumber = body.phoneNumber
            if (body.position) objForUpdate.address = body.position
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

// /api/profile/:id
router.get(
    '/:id',
    auth,
    async (req:any , res:any) => {
        try {
            const {id} = req.params

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

module.exports = router