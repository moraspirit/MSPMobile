import {
    FETCHING_RANKS,
    RANNINGS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    ranks: [],
    refreshing: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING_RANKS:
            return { ...state, refreshing: true }
        case RANNINGS_FETCH_SUCCESS:
            return { ...state, ranks: action.payload, refreshing: false };
        default:
            return state;
    }
};

