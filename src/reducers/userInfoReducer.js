
const reducer = (state = {}, action) => {
    switch (action.type) {
        
    }
    return state
}


// ACTION CREATORS

export const userInfoAction = (data) => {
    return (dispatch) => {
        dispatch({
            type:data.type,
            data:data.info
        })
    }
}




export default reducer