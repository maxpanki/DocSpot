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
        const defaultAvatar = 'defaultAvatar.bmp'
        const {email, password, role} = req.body

        //Checking email uniqueness
        const check1 = await User.findOne({email})
        if (check1) {
            return res.status(400).json({ message: 'This email already exists in database'})
        }

        const hashedPassword = await bcryptjs.hash(password, 12)
        if (role === 'Company'){
            const {companyName, companySize} = req.body
            const user = new User({ email, password: hashedPassword, role, isVerified: false, companyName, companySize, avatar: defaultAvatar})

            await user.save()
        } else {
            const {personName, personSecondName} = req.body
            const user = new User({ email, password: hashedPassword, role, isVerified: false, personName, personSecondName, avatar: defaultAvatar})

            await user.save()
        }

        res.status(201).json({message: 'User has been successfully registered.'})
    } catch (e: any) {
        res.status(500).json({
            message: e.message
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

            const {email, password} = req.body

            let candidate = await User.findOne({ email })
            if (!candidate) {
                return res.status(400).json({ message: 'User not found.'})
            }
            const user = candidate

            const isMatch = await bcryptjs.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({ message: 'Incorrect password.' })
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '24h' }
            )

            res.json({ token, userId: user.id, avatar: user.avatar, isVerified: user.isVerified })

        } catch (e: any) {
            res.status(500).json({
                message: e.message
            })
        }
})

module.exports = router