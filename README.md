<!--[RM_HEADING]-->
# BDSERVICE-UI

<!--[RM_INSTALL]-->
## Install

## [Dependencies](id:dependencies)
- git
- [nvm](http://github.com/creationix/nvm)  
- [yarn](http://yarnpkg.com/) 

## [Start app](id:start-app)

1. Switch to the correct version of node: `nvm use`
2. Install all node modules: `yarn link-modules`
3. Start simulator with command gradle startSimulatorNPPBDS
4. Start all the BD-S dependent CSP shared services ( Reference, UAM, Party, CustomerServiceV2)
5. `yarn start`


## Post CSS IDE support

- WebStorm/Intellij support post css syntax
 https://blog.jetbrains.com/webstorm/2016/08/webstorm-2016-3-early-access-preview/#postcss


## STI Changes

- Adding new node modules

1. redux-oidc
2. babel-polyfill
3. oidc-client
4. type-to-reducer