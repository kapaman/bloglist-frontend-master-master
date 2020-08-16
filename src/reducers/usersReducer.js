const reducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_USERS":
            return action.data;
    }
    return state
}


// ACTION CREATORS

export const usersAction = (data) => {
    return (dispatch) => {
        dispatch({
            type:"SET_USERS",
            data:data
        })
    }
}




export default reducer