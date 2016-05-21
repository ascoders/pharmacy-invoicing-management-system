import request from 'axios'

export const SET_ADD_DATA = 'SET_ADD_DATA'
export const ADD_DRUG = 'ADD_DRUG'
export const ADD_DRUG_REQUEST = 'ADD_DRUG_REQUEST'
export const ADD_DRUG_FAILURE = 'ADD_DRUG_FAILURE'
export const ADD_DRUG_SUCCESS = 'ADD_DRUG_SUCCESS'

const isomorphicRequestUrl = (url)=> {
    if (process.browser) {
        return url
    } else {
        return `http://127.0.0.1:8080${url}`
    }
}

export const setAddData = (value) => {
    return {
        type: SET_ADD_DATA,
        data: value
    }
}

export const addDrug = (addData)=> {
    return {
        type   : ADD_DRUG,
        promise: request.post(
            isomorphicRequestUrl('/api/sell'),
            addData
        )
    }
}
