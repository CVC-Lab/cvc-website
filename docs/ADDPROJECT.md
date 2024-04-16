# Add Project Page

1. Create new folder for project in `src/markdown/projects`
2. Add markdown file for the project within that folder. It needs to contain the following information at the top of the markdown file:

   ```
   ---
   title: ""
   slug: "/projects/link_to_project"
   date: "YYYY-MM-DD"
   ---
   ```
3. Navigate to ``gatsby-config.js``
4. Scroll down to `projectTiles`
5. Add the following information about the project:

   ```javascript
   {
   	name:'',
           description: '',
           img_name:'project_tiles/path_to_file',
           link:'/projects/link_to_project',
           tags: [], // Choose one or more of the following: ['Computer Vision', 'Reinforcement Learning', 'Scientific ML', 'Health AI/ML']
           date: 'YYYY-MM-DD'
   },
   ```
6. Follow build and deployment instructions in README.md
