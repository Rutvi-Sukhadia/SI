import {CHANGE_SEARCH_FIELD,REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAILED} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text   //payload is whatever data we will be sending to the reducer
})

//redux thunk listens to actions, if actions are returning functions then it provides dispatch so that it can run some actions
//higher order function ie function returning function, redux thunk provides dispatch to the second layer function
export const requestRobots = () => (dispatch) => {
    dispatch({type:REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => dispatch({type:REQUEST_ROBOTS_SUCCESS, payload: users}))
        .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}));
}