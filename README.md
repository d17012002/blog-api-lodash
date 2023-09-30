## Blog Analytics Backend API

A blog analytics and search tool using Express.js and Lodash.


GET method: https://tiny-rose-alligator-cuff.cyclic.cloud <br>
`/` route - Shows the backend service name. <br>

GET method: https://tiny-rose-alligator-cuff.cyclic.cloud/api/blog-stats <br>
`/api/blog-stats` route - When a GET request is made to this route, middleware makes the provided curl request to fetch the blog data. After fetching the data, Lodash is used to perform the analytics.<br>

GET method: https://tiny-rose-alligator-cuff.cyclic.cloud/api/blog-search?query=privacy<br>
`/api/blog-search?query=privacy` route - Accepts a query parameter and filters the blogs based on the provided query string.

Note: It has a caching mechanism using Lodash's `memoize` function to store the analytics results and search results for a certain period. If the same requests are made within the caching period, return the cached results instead of re-fetching and re-analyzing the data.
