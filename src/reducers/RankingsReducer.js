import {
    RANNINGS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    ranks: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RANNINGS_FETCH_SUCCESS:
            return { ranks: action.payload };
        default:
            return state;
    }
};

