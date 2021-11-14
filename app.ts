import {connect} from 'mongoose'

//Setting up constants
const express = require('express')
const config = require('config')
const PORT = config.get('port') || 5000
const dbUri = config.get('mongoUri')

//
const app = express()

app.use('/api/auth', require('./routes/auth.routes'))


async function start() {
    try{
        await connect(dbUri as string)
        app.listen(PORT, () => console.log(`App has been started... ${PORT}`))
    } catch (e) {
        console.log('Server Error', (e as Error).message)
        process.exit(1)
    }
}

start()