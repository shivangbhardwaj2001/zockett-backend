const mongoose = require("mongoose");
// mongoose.plugin(require('meanie-mongoose-to-json'));
const CampaignSchema = new mongoose.Schema({
  // id:{
  //   type:String,
  //   required:"please enter a id"

  // },

  // {
  //   id:"1",
  //   active: 1,
  //   name: "Blueberry Cake Campaign",
  //   createdOn:"14 July",
  //   clicks: 300,
  //   budget: 3400,
  //   location: "Chennai",
  //   platform: "FB",
  //   status: "Live Now",
  //   // budgetTimeline: "",
  //   startDate: "25-July-2020",
  //   endDate: "01-Aug-2020",
  //   img:"https://xyz.com"
  // }
  active: {
    type: Boolean,
  },
  name: {
    type: String,
    required: "Please enter campaign name"
  },
  createdOn: {
    type: Date,
    required: "Please enter the date created"
  },
  clicks: {
    type: Number,
    required: "Please enter clicks"
  },
  budget: {
    type: Number,
    required: "Please enter budget"
  },
  location: {
    type: String,
    required: "Please enter location"
  },
  platform: {
    type: String,
    required: "Please enter platform"
  },
  status: {
    type: String,
    required: "Please enter status"
  },
  startDate: {
    type: Date,
    required: "Please enter startDate"
  },
  endDate: {
    type: Date,
    required: "Please enter endDate"
  },
  image: {
    type: String,
    required: "Please enter image URL"
  },

}, {
  timestamps: true,
})

const Campaign = mongoose.model("Campaign", CampaignSchema);
module.exports = { Campaign }

