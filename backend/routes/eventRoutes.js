const express = require("express");
const router = express.Router();
const {
  getAllEvents,
  getEventsByCategory,
} = require("../controllers/eventController");

router.get("/", getAllEvents); 
router.get("/category/:category", getEventsByCategory);

module.exports = router;
