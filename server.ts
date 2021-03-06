import express from 'express'
import smartApp from './smartapp'


const server = express()
const PORT = process.env.PORT ?? 3001

/* Configure Express to handle JSON lifecycle event calls from SmartThings */
server.use(express.json())
server.post('/', async (req, res) => {
	await smartApp.handleHttpCallback(req, res)
})

/* Start listening at your defined PORT */
server.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`))
