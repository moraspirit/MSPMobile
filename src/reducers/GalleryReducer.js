import {
    FETCHING_ALBUMS,
    ALBUMS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    albums: [],
    refreshing: false,
    nextURL: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING_ALBUMS:
            return { ...state, refreshing: true }
        case ALBUMS_FETCH_SUCCESS:
            return { ...state, albums: action.payload.albums, nextURL: action.payload.nextURL, refreshing: false };
        default:
            return state;
    }
};

