import _ from 'lodash';
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

// // refactoring ()()
// export const fetchUser = (id) => dispatch => {
//    _fetchUser(id, dispatch);
// };

//  const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data});
//  })

// export const fetchUser = function(id) {
//     return _.memoize(async function(dispatch)  {
//     const response = await jsonPlaceHolder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data})
//     });
// }



export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data})
}


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    console.log(userIds)
    userIds.forEach(id => dispatch(fetchUser(id)));
};  