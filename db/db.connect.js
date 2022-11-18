const mongoose = require("mongoose")
const myusername = process.env['username'];
const mypassword = process.env['password'];


const initializeDBConnection = async () => {
  try {
  await mongoose.connect(`mongodb+srv://${myusername}:${mypassword}@yashs-cluster.jhzgf.mongodb.net/CampaignDb?retryWrites=true&w=majority`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log("mongodb successfully connected")

  } catch (err) {
    console.error("mongoose connection failed...", err)
  }
}


module.exports = { initializeDBConnection }