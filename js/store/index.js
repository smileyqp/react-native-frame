import {applyMiddleware, createStore} from 'redux';

import reducers from '../reducer';
import {middleware} from '../navigator/AppNavigator';
/**
 * 自定义log中间件
 * https://cn.redux.js.org/docs/advanced/Middleware.html
 * @param store
 */


const middlewares = [
    middleware
    
];

/**
 * 创建store
 */
export default createStore(reducers, applyMiddleware(...middlewares));