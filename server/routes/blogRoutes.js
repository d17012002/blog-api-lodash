const express = require("express");
const router = express.Router();

const { searchBlogs } = require("../controllers/searchController");
const { blogStatistics } = require("../controllers/statsController");

router.route('/blog-stats').get(blogStatistics);
router.route('/blog-search').get(searchBlogs);

module.exports = router;