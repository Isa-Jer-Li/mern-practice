const express = require('express')
const app = express()
const port = 8000

const {MongoClient} = require('mongodb')
const url = "mongodb+srv://IsabelleJ:W8VPmFitofpw1VmX@cluster0.xip7s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(url)

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const cors = require('cors')
app.use(cors())

app.post('/api', (req, res) => {

	const data = req.body
	data['date'] = new Date()

	async function insertToDb() {
		try {
			await client.connect()
			const collection = client.db('test_db').collection('IPs')
			await collection.insertOne(data)
			await client.close
			res.sendStatus(200)
		}
		catch(err) {
			console.log(err)
			res.sendStatus(400)
		}
	}
	insertToDb()
})


app.listen(port)
