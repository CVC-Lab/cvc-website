# Add Software

1. Create new folder for software in `src/markdown/software`
2. Add any markdown files for the software within that folder. It needs to contain the following information at the top of the markdown file:

   ```
   ---
   title: ""
   slug: "/software/link_to_software"
   ---
   ```
3. Navigate to ``gatsby-config.js``
4. Scroll down to `softwareProjects`
5. You can add on to existing category or create a new one.
6. Add the following information about the software:

   ```javascript
   {
   	name:'',
           description: '',
           link:'/software/link_to_software'
   },
   ```
7. Follow build and deployment instructions in README.md
