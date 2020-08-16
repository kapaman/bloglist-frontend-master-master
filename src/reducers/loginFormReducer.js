import loginService from '../services/login';
import blogService from '../services/blogs'
import {
    createErrorAction
} from './errorReducer';
const reducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_USERNAME":
            return {
                ...state, username: action.data
            }
            case "SET_PASSWORD":
                return {
                    ...state, password: action.data
                }
                case "LOGIN":
                    return {
                        ...state, user: action.user
                    };
    }
    return state
}


// ACTION CREATORS

export const createloginformAction = (data) => {
    return (dispatch) => {
        dispatch({
            type: data.type,
            data: data.info
        })
    }
}

export const login = ({
    username,
    password
}) => {
    return async (dispatch) => {
        try {
            const user = await loginService.login({
                username,
                password
            })
            window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
            blogService.setToken(user.token)
            dispatch({
                user,
                type: "LOGIN"
            })

            //catching error and notification
            dispatch(createErrorAction({
                errorMssg: `You have been successfully logged in`,
                status: 1
            }))
            //remove error after 5 secs
            setTimeout(() => {
                dispatch(createErrorAction({
                    status: null
                }))
            }, 5000)
        } catch (err) {
            console.log(err);
            dispatch(createErrorAction({
                errorMssg: `Wrong username/password`,
                status: 0
            }))
            //remove error after 5 secs
            setTimeout(() => {
                dispatch(createErrorAction({
                    status: null
                }))
            }, 5000)
            console.log(err.message)
        }


    }
}

export const setUserInfo = (loggedUser=null) => {
    if (loggedUser) {
        blogService.setToken(loggedUser.token)
        return dispatch => {
            dispatch({
                user: loggedUser,
                type: "LOGIN"
            })
        }
    }
    else{
        return dispatch=>{
            dispatch({
                user:null,
                type:"LOGIN"
            })
        }
    }
}



export default reducer