import {
    FETCHING_ARTICLE,
    ARTICLE_FETCH_SUCCESS,
    FETCHING_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    title:'',
    name:'',
    created:'',
    modified:'',
    body_value:'',
    uri:'',
    refreshing: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING_ARTICLE:
            return { ...INITIAL_STATE, refreshing: true }
        case ARTICLE_FETCH_SUCCESS:
            return { ...state,  ...action.payload, refreshing: false };
        case FETCHING_ERROR:
            return { ...state, refreshing: false }
        default:
            return state;
    }
};

