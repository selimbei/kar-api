// import { logger } from './logger'

// const { MongoClient, ServerApiVersion } = require('mongodb')
// const uri =
//   'mongodb+srv://new_user_1:U9cHC74131u20IbQ@clusterrestapi.gnrpovp.mongodb.net/?retryWrites=true&w=majority&appName=clusterRestApi'

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true
//   }
// })

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect()
//     // Send a ping to confirm a successful connection
//     const db = client.db('test')
//     const col = db.collection('workers')

// //     // const productList = [
// //     //   {
// //     //     name: { first: 'Alan', last: 'Turing' },
// //     //     birth: new Date(1912, 5, 23), // May 23, 1912
// //     //     death: new Date(1954, 5, 7), // May 7, 1954
// //     //     contribs: ['Turing machine', 'Turing test', 'Turingery'],
// //     //     views: 1250000
// //     //   },
// //     //   {
// //     //     name: { first: 'Grace', last: 'Hopper' },
// //     //     birth: new Date(1906, 12, 9), // Dec 9, 1906
// //     //     death: new Date(1992, 1, 1), // Jan 1, 1992
// //     //     contribs: ['Mark I', 'UNIVAC', 'COBOL'],
// //     //     views: 3860000
// //     //   }
// //     // ]

// //     // const p = await col.insertMany(productList)

// //     const filter = { 'name.last': 'Hopper' }
// //     const document = await col.find()

// //     console.log('Document found:\n' + JSON.stringify(document))
// //   } catch (err) {
// //     console.log(err)
// //   } finally {
// //     // Ensures that the client will close when you finish/error
// //     await client.close()
// //   }
// // }
// // run().catch(console.dir)

import mongoose from 'mongoose'
import { logger } from './logger'

mongoose
  .connect(
    // 'mongodb+srv://new_user_1:U9cHC74131u20IbQ@clusterrestapi.gnrpovp.mongodb.net/karyana?retryWrites=true&w=majority&appName=clusterRestApi'
    'mongodb://new_user_1:U9cHC74131u20IbQ@ac-qchixue-shard-00-00.gnrpovp.mongodb.net:27017,ac-qchixue-shard-00-01.gnrpovp.mongodb.net:27017,ac-qchixue-shard-00-02.gnrpovp.mongodb.net:27017/karyana?ssl=true&replicaSet=atlas-uogpvd-shard-0&authSource=admin&retryWrites=true&w=majority&appName=clusterRestApi'
  )
  .then(() => {
    logger.info('Success connect to database')
  })
  .catch((err) => {
    logger.error('Error connect to database', err)
    process.exit(1)
  })
