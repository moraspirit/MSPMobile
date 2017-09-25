import {
    FETCHING_ALBUMS,
    ALBUMS_FETCH_SUCCESS
} from './types';

responseInfoCallback = (error, result) => {
    if (error) {
        console.log('Error fetching data: ', error);
    } else {
        console.log('Success fetching data: ', result);
    }
}

// can use responseJson.paging.next to get next 10  -- use with flatlist "onEndReached"
export const fetchAlbums = (nextURL) => {
    return (dispatch) => {
        dispatch({ type: FETCHING_ALBUMS });
        fetch(nextURL, {
            method: 'get',
            headers: {
                'Authorization': 'OAuth EAAOoAjs48vsBAJ0UZCcEMTVxniQtwkmMMjSZAXCKZAqg2uzUoykwJWFZB0phSTTkSKcguZAfPUll1BamoanOYGNRv2XI4j0ZB0GPtfR5aX5t8h8juuG9YOpkzbTyoA5Tk9OXcvt9mGh19RIWuVrv78azfA6ABZB594e3gZBC5z1AugZDZD',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                const albums = responseJson;
                const nextURL = responseJson.paging.next;
                console.log(albums);

                dispatch({ type: ALBUMS_FETCH_SUCCESS, payload: { albums, nextURL } });

            })
            .catch((error) => {
                console.error(error);
            });

    };
};

