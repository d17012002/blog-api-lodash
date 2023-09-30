const axios = require("axios");
const _ = require("lodash");

const fetchAndFilterBlogData = async () => {
  try {
    const response = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs', {
      headers: {
        'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
      }
    });

    const blogData = response.data.blogs;
    return blogData;
  } catch (error) {
    throw error;
  }
};


const memoizedFetchAndFilterBlogData = _.memoize(fetchAndFilterBlogData, () => 'blog-data-cache-key');

const searchBlogs = async (req, res) => {
  try {
    const query = req.query.query;
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required.' });
    }

    const blogData = await memoizedFetchAndFilterBlogData();

    const filteredBlogs = [];
    for (let i = 0; i < blogData.length; i++) {
      if (typeof blogData[i].title === 'string' && blogData[i].title.toLowerCase().includes(query.toLowerCase())) {
        console.log("matched");
        filteredBlogs.push(blogData[i]);
      }
    }

    res.json(filteredBlogs);
  } catch (error) {
    console.error('Error fetching and filtering data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { searchBlogs };
