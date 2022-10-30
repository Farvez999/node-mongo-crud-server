const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//mideleware
app.use(cors());
app.use(express.json());

//username:dbUser2
//password:Z4c7Z1pxobVDzUQP


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dbUser1:P1GCRC6Y3K2W5Mwo@cluster0.mordayw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const userCollection = client.db("nodeMongoCrud").collection("users");

        app.post('/users', async (req, res) => {
            const user = req.body;
            console.log(user)

            const result = await userCollection.insertOne(user);
            res.send(result);
        })


    } finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello from mongo server')
})

app.listen(port, () => {
    console.log(`Listing on port ${port}`)
})