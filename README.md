# Building a Modern UI/UX Website with Sanity.io

![image](https://user-images.githubusercontent.com/57111980/227929384-3bab0bcb-124e-400d-8b9c-000cb65e38d0.png)

Welcome to the guide on building a modern UI/UX website using [Sanity.io](https://www.sanity.io/) for Content Management System (CMS) and deploying a full-stack responsive portfolio website.

Sanity.io is a powerful cloud-based headless CMS that enables creation, management and delivery of digital experiences to web and mobile applications. Using Sanity.io you can add, edit and manage content easily with their visually rich dashboard and customize your front-end by fetching data through the Sanity.io API.

# Prerequisites

- HTML/CSS knowledge
- Basic knowledge of JavaScript
- Node.js and npm installed
- Basic knowledge of React.js
- A Sanity.io account

# Creating a Sanity.io account

1. Go to [sanity.io/signup](https://www.sanity.io/signup) and create an account by filling out the sign-up form and verify your email address.

2. Once you have verified your email address, log in to your Sanity.io dashboard.

# Setting up your project

1. Create a new project: on your Sanity.io dashboard, click the “+ Create new project” button and name your project.

2. Install the Sanity CLI: open your terminal and install the Sanity CLI by running the command:
   ```
   npm install -g @sanity/cli
   ```
3. Set up the Sanity project: navigate to the directory where you want to set up your project and run the command:
   ```
   sanity init
   ```
   Follow the prompts to configure your project and choose the desired project template.

# Configuring your schema

1. Open the `schema.js` file in your project.

2. Define your data schema: define the types of data you want to include in your CMS by defining the data schema. You can create types for pages, posts, images and other content.

3. Define your dataset: after defining your schema, define your dataset. You can define multiple datasets to allow for data management across different environments.

4. Deploy your dataset: deploy your dataset to the Sanity.io cloud by running the command:
   ```
   sanity dataset deploy
   ```

# Building your website

1. Create a React app: create a new React app in your local environment by running the command:
   ```
   npx create-react-app my-app
   ```

2. Install the Sanity client: install the Sanity client in your React app by running the command:
   ```
   npm install @sanity/client
   ```

3. Import the Sanity client: import the Sanity client in your React app by adding the following code to your `index.js` file:
   ```
   import sanityClient from '@sanity/client'
   
   const client = sanityClient({
      projectId: 'your-project-id',
      dataset: 'your-dataset-name',
      useCdn: true // if you want to use the CDN
   });
   ```

4. Fetch data from Sanity: you can fetch data from Sanity by using the Sanity client in your React components. For example:
   ```
   import React, { useState, useEffect } from 'react';
   import sanityClient from '@sanity/client';

   const client = sanityClient({
      projectId: 'your-project-id',
      dataset: 'your-dataset-name',
      useCdn: true
   });

   const App = () => {
      const [ data, setData ] = useState([]);

      useEffect(() => {
         client.fetch(`*[_type == "post"]`).then((data) => setData(data));
      }, []);

      return (
         <div>
            { data.map((item) => (
               <div key={item._id}>
                  <h2>{ item.title }</h2>
                  <p>{ item.text }</p>
               </div>
            ))}
         </div>
      );
   };

   export default App;
   ```

5. Design your UI/UX: after fetching data from Sanity, you can design your UI/UX by using HTML/CSS/JS and React components.

# Deploying your website

1. Build your app: build your React app by running the command:
   ```
   npm run build
   ```

2. Install the Sanity CLI: install the Sanity CLI by running the command:
   ```
   npm install -g @sanity/cli
   ```

3. Deploy your app: deploy your app to the Sanity.io cloud by running the command:
   ```
   sanity deploy
   ```

# Conclusion

Congratulations! You have successfully built a modern UI/UX website using Sanity.io as your CMS and deployed a full-stack responsive portfolio website. With the ability to easily add, edit and manage content through Sanity.io, your website will stay up-to-date and informative for your audience..
