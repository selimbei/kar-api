import { MongoClient, ServerApiVersion } from 'mongodb'
const uri =
  'mongodb://new_user_1:U9cHC74131u20IbQ@ac-qchixue-shard-00-00.gnrpovp.mongodb.net:27017,ac-qchixue-shard-00-01.gnrpovp.mongodb.net:27017,ac-qchixue-shard-00-02.gnrpovp.mongodb.net:27017/web?ssl=true&replicaSet=atlas-uogpvd-shard-0&authSource=admin&retryWrites=true&w=majority&appName=clusterRestApi'

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect()
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 })
    console.log('Pinged your deployment. You successfully connected to MongoDB!')
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}
run().catch(console.dir)
