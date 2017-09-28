import {
    FETCHING_ARTICLES,
    INITIAL_ARTICLES_FETCH_SUCCESS,
    ARTICLES_FETCH_SUCCESS,
    FETCHING_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    articles: [],
    refreshing: false,
    offset: 0
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCHING_ARTICLES:
            return { ...state, refreshing: true }
        case INITIAL_ARTICLES_FETCH_SUCCESS:
            return { ...state, articles: action.payload, refreshing: false, offset: action.payload.length };
        case ARTICLES_FETCH_SUCCESS:
            // Check wether the last article in the store is same as the last one of the received articles list
            if (action.payload && state.articles.length > 1 && action.payload[action.payload.length - 1].nid === state.articles[state.articles.length - 1].nid) {
                console.log('Douplicate fetch detected !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
                return state;
            }
            return { ...state, articles: [...state.articles, ...action.payload], refreshing: false, offset: state.articles.length + action.payload.length };
        case FETCHING_ERROR:
            return { ...state, refreshing: false }
        default:
            return state;
    }
};

