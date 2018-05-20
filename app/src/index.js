import _ from 'lodash'
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './sagas/index'
import rootReducer from './reducers/index'
import App from './components/app/App'
import {AppContainer} from 'react-hot-loader'
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

require('es6-promise').polyfill()

if (!_.isNil(process.env)) {
  console.log(`Running with NODE_ENV : ${process.env.NODE_ENV}`)
} else {
  console.log(`Running with no NODE_ENV`)
}

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const composeEnhancers = (ENV === 'DEV' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose // eslint-disable-line no-undef
const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
)

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['productData']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  enhancer
)
const persistor = persistStore(store)
const rootElement = document.getElementById('app')

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </AppContainer>
  , rootElement)

if (module.hot) {
  module.hot.accept()
}
