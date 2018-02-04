import { NOTIFICATION_RECEIVED, NOTIFICATIONS_RECEIVED, DELETE_NOTIFICATION } from '../actions/types';

const INITIAL_STATE = {
    items: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NOTIFICATION_RECEIVED:
            return { items: [action.payload, ...state.items] }
        case NOTIFICATIONS_RECEIVED:
            return { items: [...action.payload, ...state.items] };
        case DELETE_NOTIFICATION:
            return { items: action.payload }
        default:
            return state;
    }
};

