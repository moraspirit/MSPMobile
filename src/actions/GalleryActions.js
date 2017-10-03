import {
    FETCHING_ALBUMS,
    INITIAL_ALBUMS_FETCH_SUCCESS,
    ALBUMS_FETCH_SUCCESS,
    FETCHING_ERROR
} from './types';

const INITIAL_URL = 'https://graph.facebook.com/MoraSpirit.Official.fanpage/albums?fields=name,cover_photo{id},likes.limit(0).summary(true),comments.limit(0).summary(true)&limit=8';

export const fetchInitialAlbums = () => {
    return (dispatch) => {
        dispatch({ type: FETCHING_ALBUMS });
        fetch(INITIAL_URL, {
            method: 'get',
            headers: {
                'Authorization': 'OAuth EAAOoAjs48vsBAJ0UZCcEMTVxniQtwkmMMjSZAXCKZAqg2uzUoykwJWFZB0phSTTkSKcguZAfPUll1BamoanOYGNRv2XI4j0ZB0GPtfR5aX5t8h8juuG9YOpkzbTyoA5Tk9OXcvt9mGh19RIWuVrv78azfA6ABZB594e3gZBC5z1AugZDZD',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                const albums = responseJson.data;
                const nextURL = responseJson.paging.next;
                console.log(albums);

                dispatch({ type: INITIAL_ALBUMS_FETCH_SUCCESS, payload: { albums, nextURL } });

            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: FETCHING_ERROR });
            });

    };
};

export const fetchAlbums = (nextURL) => {
    return (dispatch) => {
        dispatch({ type: FETCHING_ALBUMS, payload: nextURL });
        fetch(nextURL + '&limit=30', {
            method: 'get',
            headers: {
                'Authorization': 'OAuth EAAOoAjs48vsBAJ0UZCcEMTVxniQtwkmMMjSZAXCKZAqg2uzUoykwJWFZB0phSTTkSKcguZAfPUll1BamoanOYGNRv2XI4j0ZB0GPtfR5aX5t8h8juuG9YOpkzbTyoA5Tk9OXcvt9mGh19RIWuVrv78azfA6ABZB594e3gZBC5z1AugZDZD',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                const albums = responseJson.data;
                const NewNextURL = responseJson.paging.next;
                console.log(albums);

                dispatch({ type: ALBUMS_FETCH_SUCCESS, payload: { albums, nextURL: NewNextURL } });

            })
            .catch((error) => {
                console.error(error);
                dispatch({ type: FETCHING_ERROR });
            });

    };
};

