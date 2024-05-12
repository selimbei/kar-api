import mongoose from 'mongoose'

main().catch((err) => console.log(err))

async function main() {
  await mongoose.connect(
    'mongodb+srv://new_user_1:U9cHC74131u20IbQ@clusterrestapi.gnrpovp.mongodb.net/?retryWrites=true&w=majority&appName=clusterRestApi'
  )

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
