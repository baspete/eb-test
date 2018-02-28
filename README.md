
This is an app skeleton with the following features:

* A Node/Express app at `app.js`
* A React app at `client/`

The React app was created with [Create React App](https://github.com/facebookincubator/create-react-app).

## Installation

Clone this repo. Then, from root of the repo:
```
% yarn install
% cd client/
% yarn install
```

## Development

From the root of the repo:
```
% yarn start
```

This does the following:

1. Starts your node.js app up on port 3001
2. Uses `react-scripts` to start a dev server for your react app on port 3000
3. Sets up a proxy on the React server to point to port 3001

## Unit Tests

```
% cd client/
% yarn test
```

## Building the React App for Production

From the root of the repo:
```
% yarn build
```
This will create a `client/build/` directory with an optimized version of the React app. See [Create React App](https://github.com/facebookincubator/create-react-app) for details.