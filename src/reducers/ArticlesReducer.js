import {
    FETCHING_ARTICLES,
    INITIAL_ARTICLES_FETCH_SUCCESS,
    ARTICLES_FETCH_SUCCESS,
    FETCHING_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    articles: [],
    refreshing: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING_ARTICLES:
            return { ...state, refreshing: true }
        case INITIAL_ARTICLES_FETCH_SUCCESS:
            return { ...state, articles: action.payload, refreshing: false };
        case ARTICLES_FETCH_SUCCESS:
            return { ...state, articles: [...state.articles, ...action.payload], refreshing: false };
        case FETCHING_ERROR:
            return { ...state, refreshing: false }
        default:
            return state;
    }
};

