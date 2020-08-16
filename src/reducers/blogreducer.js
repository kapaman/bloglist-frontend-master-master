import blogService from '../services/blogs';
import commentService from '../services/comments';
import {createErrorAction} from './errorReducer';


const reducer =(state={},action)=>{
    switch(action.type){
        case "INIT_BLOGS":
            return action.data;
        case "ADD_BLOG":
            return state.concat(action.data);
        case "INC_VOTE":
            return state.map(el => el.id === action.data.id ? action.data : el)
        case "REM_BLOG":
            return state.filter(el=>el.id!==action.data.id) 
        case "ADD_COMMENT":
          let finalState;
          for(let i =0;i<state.length;i++){
            if(state[i].id===action.data.id){
             finalState=[...state,state[i].comments=state[i].comments.concat(action.data.comment)];
             break;
            }
          }
          return finalState;
    }
    return state
}






// ACTION CREATORS

export const initBlogs = ()=>{
    return async dispatch => {
        const blogs = await blogService.getAll()
        dispatch({
          type: 'INIT_BLOGS',
          data: blogs,
        })
      }
}


export const removeBlog = (oldblog)=>{
  return async dispatch => {

      try {
        await blogService.removeBlog(oldblog.id)
        dispatch({
          type: 'REM_BLOG',
          data: {id:oldblog.id},
        })
        dispatch(createErrorAction({
          errorMssg: `The Blog "${oldblog.title}" has been deleted`,
          status: 1
        }))
  
        setTimeout(() => {
          dispatch(createErrorAction({status:null}))
        }, 5000)
        // let newbloglist = blogs.filter(el => el.id !== id)
      } catch (err) {
        dispatch(createErrorAction({
          errorMssg: 'The Blog could not be deleted',
          status: 0
        }))
  
        setTimeout(() => {
          dispatch(createErrorAction({status:null}))
        }, 5000)
        console.log(err.message)
      }

      
    }
}


export const incVoteAction = (data)=>{
    return async dispatch => {
        let req = await blogService.incLike(data)
        dispatch({
          type: 'INC_VOTE',
          data: req,
        })
      }
    
}

export const addBlogAction = (data)=>{
    return async dispatch => {
        
        try {
          //MAKE NEW BLOG
          let blog = await blogService.create(data)
          dispatch({
            type: 'ADD_BLOG',
            data: blog,
          })

          //set error
          dispatch(createErrorAction({
            errorMssg: `The Blog "${blog.title}" was saved`,
            status: 1
          }))
          //remove error after 5 secs
          setTimeout(() => {
            dispatch(createErrorAction({status:null}))
          }, 5000)
          
        } catch (err) {
    
          dispatch(createErrorAction({
            errorMssg: 'Blog could not be saved',
            status: 0
          }))
    
          setTimeout(() => {
            dispatch(createErrorAction({status:null}))
          }, 5000)
          console.log(err)
        }

        
      }
    
}


export const addCommentAction =(data)=>{
  return async dispatch => {
    let request = await commentService.postComment({id:data.id,comment:data.comment})
    dispatch({
      type:"ADD_COMMENT",
      data:data
    })

  }
}
export default reducer