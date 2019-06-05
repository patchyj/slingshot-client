/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  GET_POSTS_STARTED,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from '../types';
import { getPostsQuery } from './postQueries';
import { baseURL } from '../../utils/baseURL';

// eslint-disable-next-line no-console
console.log(`${baseURL}/graphql`);

export const getPosts = () => (dispatch) => {
  dispatch({ type: GET_POSTS_STARTED });

  axios
    .post(`${baseURL}/graphql`, {
      query: getPostsQuery().query
    })
    .then((res) => {
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: res.data.data.allBlogs
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_POSTS_FAILURE,
        payload: err
      });
    });
};

// export const getPosts = () => (dispatch) => {
//   dispatch({ type: GET_POSTS_STARTED });
//   fetch('http://localhost:4000/graphql')
//     .then(response => response.json())
//     .then((res) => {
//       dispatch({
//         type: GET_POSTS_SUCCESS,
//         payload: res
//       });
//     })
//     .catch((err) => {
//       dispatch({
//         type: GET_POSTS_FAILURE,
//         payload: err
//       });
//     });
// };
