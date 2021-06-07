import {CHANGE_SEARCH_FIELD,REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAILED} from './constants';

const initialStateForSearchRobots = {
    searchField:''
}

//Pure function - takes input and produces output that does not have any side effects ie it doesnt modify anything
export const searchRobots = (state=initialStateForSearchRobots,action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({},state,{searchField:action.payload});
        default:
            return state;
    }
}

const initialStateForRequestRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateForRequestRobots,action={}) => {
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({},state,{isPending: true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({},state,{isPending: false,robots: action.payload});
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({},state,{isPending:false,error: action.payload});  
        default:
            return state;
    }
}

