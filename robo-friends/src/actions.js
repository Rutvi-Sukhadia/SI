import {CHANGE_SEARCH_FIELD} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text   //payload is whatever data we will be sending to the reducer
})