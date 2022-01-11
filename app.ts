import {connect} from 'mongoose'

//Setting up constants
const express = require('express')
const config = require('config')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const morgan = require('morgan')

const PORT = config.get('port') || 5000
const dbUri = config.get('mongoUri')

const app = express()

app.use(fileUpload({
    createParentPath: true
}))
app.use(cors())
app.use(express.json({ extended: true }))
app.use(morgan("dev"))
app.use('/api/profile', require('./routes/profile.routes'))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/post', require('./routes/posts.routes'))

async function start() {
    try{
        await connect(dbUri)
        app.listen(PORT, () => console.log(`App has been started... ${PORT}`))
    } catch (e) {
        console.log('Server Error', (e as Error).message)
        process.exit(1)
    }
}

start()