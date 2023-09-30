## Blog Analytics Backend API

A blog analytics and search tool using Express.js and Lodash.


GET method: https://tiny-rose-alligator-cuff.cyclic.cloud <br>
`/` route - Shows the backend service name. <br>

GET method: https://tiny-rose-alligator-cuff.cyclic.cloud/api/blog-stats <br>
`/api/blog-stats` route - When a GET request is made to this route, middleware makes the provided curl request to fetch the blog data. After fetching the data, Lodash is used to perform the analytics.<br>

GET method: https://tiny-rose-alligator-cuff.cyclic.cloud/api/blog-search?query=privacy<br>
`/api/blog-search?query=privacy` route - Accepts a query parameter and filters the blogs based on the provided query string.

Note: It has a caching mechanism using Lodash's `memoize` function to store the analytics results and search results for a certain period. If the same requests are made within the caching period, return the cached results instead of re-fetching and re-analyzing the data.

## Getting Started (Locally)

<h3>Download or clone the repository</h3>
<p>You can download the zip file of the repository or use the following command in your terminal to clone the repository:</p>
<pre><code class="language-bash">git clone https://github.com/blog-api-lodash</code></pre>
<h3>Navigate to the project's root directory</h3>
<p>Once you have downloaded or cloned the repository, navigate to the project's root directory. The project consists of 1 folder i.e server.</p>
<h3>Install dependencies</h3>
<p>Before starting the server, make sure to install the dependencies by running the command:</p>
<pre><code class="language-bash">npm install</code></pre>

<h3>Start the server</h3>
<p>To start the servers, run the following commands:</p>
<pre><code>nodemon server.js</code></pre>

- API `http://localhost:3000/`
<h4>Note: Make sure to follow the exact steps mentioned above to avoid any errors or issues.</h4>
