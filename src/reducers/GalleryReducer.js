import {
    FETCHING_ALBUMS,
    INITIAL_ALBUMS_FETCH_SUCCESS,
    ALBUMS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    albums: [],
    refreshing: false,
    nextURL: '',
    covers:[]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING_ALBUMS:
            return { ...state, refreshing: true }
        case INITIAL_ALBUMS_FETCH_SUCCESS:
            return { ...state, albums: action.payload.albums, nextURL: action.payload.nextURL, refreshing: false };
        case ALBUMS_FETCH_SUCCESS:
            return { ...state, albums: [...state.albums, ...action.payload.albums], nextURL: action.payload.nextURL, refreshing: false };
        default:
            return state;
    }
};

