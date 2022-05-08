const express = require('express')
const app = express()
const port = 101

const {MongoClient} = require('mongobd')
const url = "mongodb+srv://IsabelleJ:wXRqQuPuxEyMhdrT@cluster0.xip7s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(url)

app.use(express.json())  // allows you to pass json data from F.E and B.E
app.use(express.urlencoded({extended: true})) //  allows you to access req.body

app.post('/api', (req, res) => {

const data = req.body
	data['date'] = new Date()

	async function insertDoc() {
		try {
			await client.connect()
			const collection = client.db('test_db').collection('IPs')
			await client.insertOne(data)
			await client.close
			res.sendStatus(200)
		}
		catch(err) {
			console.log(err)
			res.sendStatus(400)
		}
	}
	insertDoc()
})

app.listen(port)