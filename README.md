This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Microservice
> about how to deployment microservice and monitoring then

## Application structure

```
src/
├── common/             [應用級別的通用元件]
├── containers/  
|  ├── feature1/
|  |  ├── components/   [功能拆分出的專用元件]
|  |  ├── feature1.js   [容器元件]
|  |  └── index.js      [feature1對外暴露的介面]
├── redux/
|  ├── index.js         [combineReducers]
|  ├── module1.js       [reducer, action types, actions creators]
|  └── module2.js       [reducer, action types, actions creators]
├── middleware/         [資料處理相關]
│  └── API.js                
├── assets/
└── index.js
```
reference：
- https://www.itread01.com/content/1550281699.html
- https://medium.com/@as790726/%E5%A6%82%E4%BD%95%E7%B5%84%E7%B9%94%E4%BD%A0%E7%9A%84-react-redux-%E7%9A%84%E6%AA%94%E6%A1%88%E6%9E%B6%E6%A7%8B-e000a1afdd1

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
