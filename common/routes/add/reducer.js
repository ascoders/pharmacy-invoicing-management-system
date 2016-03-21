import {SET_ADD_DATA, ADD_DRUG} from './action'
import {createReducer} from 'redux-immutablejs'
import Immutable from 'immutable'

const initialState = Immutable.fromJS({
    addData: {}
})

export default createReducer(initialState, {
    [SET_ADD_DATA]: (state, action) => state.mergeDeep({
        addData: {
            [action.data.field]: action.data.value
        }
    }),

    [ADD_DRUG]: (state, action)=> {
        return state.mergeDeep({})
    }
})