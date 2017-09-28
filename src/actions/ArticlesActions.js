import {
    FETCHING_ARTICLES,
    INITIAL_ARTICLES_FETCH_SUCCESS,
    ARTICLES_FETCH_SUCCESS,
    FETCHING_ERROR
} from './types';

let uri = 'http://128.199.230.133/articles';

if (process.env.NODE_ENV != 'production') {
    uri = 'http://192.168.1.3:8080/articles';
}

export const fetchInitialArticles = () => {
    return (dispatch) => {
        dispatch({ type: FETCHING_ARTICLES });
        fetch(uri)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                dispatch({ type: INITIAL_ARTICLES_FETCH_SUCCESS, payload: responseJson });
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: FETCHING_ERROR });
            });

    };
};



