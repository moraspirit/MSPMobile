import {
    FETCHING_RANKS,
    RANKINGS_FETCH_SUCCESS,
    FETCHING_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    ranks: [],
    refreshing: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING_RANKS:
            return { ...state, refreshing: true }
        case RANKINGS_FETCH_SUCCESS:
            return { ...state, ranks: action.payload, refreshing: false };
        case FETCHING_ERROR:
            return { ...state, refreshing: false }
        default:
            return state;
    }
};

