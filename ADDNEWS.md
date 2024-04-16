# Add News

1. Add markdown file for the news within `src/markdown/news`. It needs to contain the following information at the top of the markdown file:

   ```
   ---
   title: ""
   slug: "/link_to_news"
   date: "YYYY-MM-DD"
   ---
   ```
2. Navigate to ``gatsby-config.js``
3. Scroll down to `newsTiles`
4. Add the following information about the news:

   ```javascript
   {
   	name:'',
           description: '',
           link:'/link_to_news',
           date: 'YYYY-MM-DD'
   },
   ```
5. Follow build and deployment instructions in README.md
