
import jsonPlaceHolder from '../apis/jsonPlaceHolder';

//refactoring//
export const fetchPosts =  () => async dispatch => {
    const response = await  jsonPlaceHolder.get('/posts');
  
    dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

// export const fetchPosts =  () => {
//   return async function(dispatch, getState) {
//     const response = await  jsonPlaceHolder.get('/posts');
    
//     dispatch({
//       type: 'FETCH_POSTS', payload: response
//     })
// }

// }

// export const selectPost = () => {
//   return {
//     type: 'SELECT_POST'
//   }
// }
