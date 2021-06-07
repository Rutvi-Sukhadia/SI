import {CHANGE_SEARCH_FIELD} from './constants';

const initialState = {
    searchField:''
}

//Pure function - takes input and produces output that does not have any side effects ie it doesnt modify anything
export const searchRobots = (state=initialState,action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({},state,{searchField:action.payload});
        default:
            return state;
    }
}