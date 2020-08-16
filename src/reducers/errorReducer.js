const reducer = (state = {}, action) => {
    switch (action.status) {
        case 1:
            return {...action}
        case 0:
            return {...action}    
        case null:
            return {...state,errorMssg:null};    
    }
    return state
}


// ACTION CREATORS

export const createErrorAction = (data) => {
    return dispatch => {
        dispatch({...data,type:'error'})
    }
}


export default reducer