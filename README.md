# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


<h3>Additional Information</h3> 

### Setting the homepage Attribute

To ensure your app correctly resolves paths, set the homepage attribute in your package.json to the URL where your app will be hosted. For example:

```json 

{
  "homepage": "https://users.ugent.be/~rodpicke"
}
```
This helps in generating the correct URLs for the assets in your app during the build process.

Setting Up the Self-Hosted Runner

To set up a self-hosted runner and configure the deploy.yml file for your deployment needs, follow these steps:

#1-Install the Runner:

Navigate to your repository on GitHub.

Go to "Settings" > "Actions" > "Runners".

Follow the instructions to download and install the runner on your server.

#2-Configure deploy.yml:

In your repository, navigate to .github/workflows/deploy.yml.

Customize the file to suit your deployment needs. Here's an example configuration:

```
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    -runs-on: self-hosted

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Install dependencies
        run: npm install

      - name: Build the project
        run: npm run build

      - name: Deploy to server
        run: |
          rsync -avh --delete build/ user@your-server:/path/to/deploy
```


<h3>Additional Configuration for the Runner</h3>

Ensure your self-hosted runner has the necessary permissions and access to the repository. Additionally, make sure the deployment directory on your server has the correct permissions to receive the new build files.

Deploying Interactive Apps

#1-To deploy interactive apps on your website, follow these steps:

Include Interactive Apps in the Build Process:Ensure that your interactive apps are included in the main build process.

This might involve importing and using the interactive components in your main React application.

#2-Deploy Built Assets:

Use the deployment script in deploy.yml to deploy the built assets to your server.

For example, the rsync command in the script above transfers the contents of the build/ directory to the specified path on your server.

#3-Configure Server to Serve Interactive Apps:

Ensure your server is configured to serve the static files correctly.

You might need to set up proper routes and permissions on the server to handle the interactive app requests.

By following these steps, you can ensure that your interactive apps are built and deployed along with your main application, providing a seamless user experience on your website.

# personal-website
Personal website which will be deployed at users.ugent.be/~rodpicke.
