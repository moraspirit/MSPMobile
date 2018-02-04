import {
    DELETE_NOTIFICATION
} from './types';

export const deleteNotification = (newNotifications) => {
    return { type: DELETE_NOTIFICATION, payload: newNotifications }

};

