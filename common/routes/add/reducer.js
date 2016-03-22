import * as action from './action'
import {createReducer} from 'redux-immutablejs'
import Immutable from 'immutable'

const initialState = Immutable.fromJS({
    addData: {}
})

export default createReducer(initialState, {
    [action.SET_ADD_DATA]: (state, action) => state.mergeDeep({
        addData: {
            [action.data.field]: action.data.value
        }
    }),

    [action.ADD_DRUG]: (state, action)=> {
        return state.mergeDeep({})
    }
})