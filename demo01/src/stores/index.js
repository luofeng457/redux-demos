import { createStore , applyMiddleware ,compose } from 'redux';  //  引入createStore方法
import reducer from '../reducers';   
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleWare));

const store = createStore(reducer, enhancer);

sagaMiddleWare.run(mySaga);

// const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

// const enhancer = composeEnhancers(applyMiddleware(thunk))

// const store = createStore( reducer, enhancer) // 创建数据存储仓库
export default store   //暴露出去