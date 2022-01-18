import {Router} from 'express'

const auth = require('../middleware/auth.middleware')
const Qa = require('../models/Qa')
const router = Router()

// /api/qa/create
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
                img.mv("./client/public/uploads/qa/" + img.name)
                objForCreate.img = img.name
            }

            const qa = new Qa(objForCreate)
            await qa.save()

            res.status(201).json({
                qa
            })
        } catch (e: any) {
            res.status(500).json({
                message: e.message
            })
        }
    })

// /api/qa/getQas
router.post(
    '/getQas',
    auth,
    async (req:any, res:any) => {
        try{
            let qas = await Qa.find()
            if (!qas) {
                return res.status(400).json({ message: 'Questions not found.'})
            }

            res.json({
                qas
            })
        } catch (e: any) {
            res.status(500).json({
                message: e.message
            })
        }
    })

module.exports = router