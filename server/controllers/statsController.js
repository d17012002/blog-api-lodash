const _ = require("lodash");
const axios = require("axios");

const blogStatistics = async(req, res) => {
    try {
        const response = await axios.get(
          "https://intent-kit-16.hasura.app/api/rest/blogs",
          {
            headers: {
              "x-hasura-admin-secret":
                "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6",
            },
          }
        );
    
        const blogData = response.data.blogs;
        console.log(blogData);
    
        const totalBlogs = _.size(blogData);
    
    
        const blogWithLongestTitle = _.maxBy(blogData, (blog) => blog.title.length);
    
        const blogsWithPrivacyTitle = _.filter(
          blogData,
          (blog) =>
            typeof blog.title === "string" &&
            _.includes(blog.title.toLowerCase(), "privacy")
        ).length;
    
        
        const uniqueBlogTitles = _.uniq(_.map(blogData, "title"));
    
        const responseJson = {
          totalBlogs,
          longestBlogTitle: blogWithLongestTitle ? blogWithLongestTitle.title : "N/A",
          blogsWithTitlePrivacy: blogsWithPrivacyTitle,
          uniqueBlogTitles,
        };
    
        console.log(responseJson);
        res.json(responseJson);
    
      } catch (error) {
        console.error("Error fetching and analyzing blog data:", error);
        res.status(500).json({ error: "Internal server error" });
      }
}

module.exports = { blogStatistics }