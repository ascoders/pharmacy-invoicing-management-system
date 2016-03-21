import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import reduxUndo from 'redux-undo'

// 引用各模块 reducer
import layout from './layout/reducer'
import notFound from './routes/not-found/reducer'
import home from './routes/home/reducer'
import counter from './routes/counter/reducer'
import add from './routes/add/reducer'

// 聚合各 reducer
// 将路由也加入 reducer
const rootReducer = combineReducers({
    layout  : layout,
    notFound: notFound,
    home    : home,
    counter : reduxUndo(counter),
    routing : routerReducer,
    add     : add
})

export default rootReducer