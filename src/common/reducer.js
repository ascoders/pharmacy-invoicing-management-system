import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import reduxUndo from 'redux-undo'

// 引用各模块 reducer
import layout from './layout/reducer'
import notFound from './routes/not-found/reducer'
import { selectedReddit, postsByReddit } from './routes/home/reducer'
import counter from './routes/counter/reducer'

// 聚合各 reducer
// 将路由也加入 reducer
const rootReducer = combineReducers({
    layout: layout,
    notFound: notFound,
    selectedReddit: reduxUndo(selectedReddit),
    postsByReddit: reduxUndo(postsByReddit),
    counter: reduxUndo(counter),
    routing: routerReducer
})

export default rootReducer