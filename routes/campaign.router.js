const express = require('express');
const router = express.Router();
const { Campaign } = require('../models/campaign.model.js');

router.route('/')
  .get(async (req, res) => {
    try {
      const campaigns = await Campaign.find({});
      res.json({ success: true, response: campaigns })
    } catch {
      res.status(500).json({ success: false, message: "request can't be fullfilled" })
    }
  })

  .post(async (req, res) => {
    try {
      const campaign = req.body;
      const NewCampaign = new Campaign(campaign);
      const savedCampaign = await NewCampaign.save();
      res.status(201).json({ success: true, response: savedCampaign })
    } catch (err) {
      res.status(500).json({ status: false, message: "data not saved", errorMessage: err.message });
    }
  })



router.param("campaignId", async (req, res, next, campaignId) => {
  try {
    let campaign = await Campaign.findById(campaignId);
    if (!campaign) {
      res.status(400).json({ success: false, message: "campaign not found" });
    }
    req.campaign = campaign;
    next();
  } catch {
    res.status(500).json({ success: false, message: "error occured" });
  }
})

router.route('/:campaignId')
  .get(async (req, res) => {
    try {
      let { campaign } = req;
      res.json({ success: true, response: campaign });
    } catch {
      res.status(400).json({ success: false, message: "Cannot retrieve cart items" })
    }
  })

  .post(async (req, res) => {
    try {
      let { campaign } = req;
      const updatedCampaign = req.body;

      campaign.active = updatedCampaign.active;
      campaign.name = updatedCampaign.name;
      campaign.createdOn = updatedCampaign.createdOn;
      campaign.clicks = updatedCampaign.clicks;
      campaign.budget = updatedCampaign.budget;
      campaign.location = updatedCampaign.location;
      campaign.platform = updatedCampaign.platform;
      campaign.status = updatedCampaign.status;
      campaign.startDate = updatedCampaign.startDate;
      campaign.endDate = updatedCampaign.endDate;
      campaign.img = updatedCampaign.img;

      await campaign.save();

      res.json({ success: true, response: campaign });
    } catch {
      res.status(500).json({ success: false, message: "cannot add the product" })
    }
  })


  .delete(async (req, res) => {
    try {
      const { campaignId } = req.params;
      await Campaign.findByIdAndRemove(campaignId)
      res.json({ success: true, response: "deleted Successfully" });
    } catch (error) {
      res.json({ success: false, response: error.message });
    }
  })


module.exports = router;