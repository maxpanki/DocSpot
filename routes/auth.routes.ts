import {Router} from 'express'
import {check, validationResult} from 'express-validator'

const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Email has incorrect type').isEmail(),
        check('password', 'Minimal password length is 6.')
            .isLength({ min: 6 })
    ],
    async (req:any , res:any) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect registration data.'
            })
        }

        const {email, password, role} = req.body

        //Checking email uniqueness
        const candidate = await User.findOne({email})
        if (candidate) {
            return res.status(400).json({ message: 'This email already exists in database'})
        }

        const hashedPassword = await bcryptjs.hash(password, 12)
        const user = new User({ email, password: hashedPassword, role, isVerified: false})

        await user.save()

        res.status(201).json({message: 'User has been successfully registered.'})
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong, please try again later.'
        })
    }
})

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Email has incorrect type').isEmail(),
        check('password', 'Minimal password length is 6.')
            .isLength({ min: 6 })
    ],
    async (req: any, res: any) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect registration data.'
                })
            }

            const {email, password, role} = req.body

            const user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({ message: 'User not found.'})
            }

            const isMatch = await bcryptjs.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({ message: 'Incorrect password.' })
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )

            res.json({ token, userId: user.id })

        } catch (e) {
            res.status(500).json({
                message: 'Something went wrong, please try again later.'
            })
        }
})

module.exports = router