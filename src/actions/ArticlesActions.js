import {
    FETCHING_ARTICLES,
    INITIAL_ARTICLES_FETCH_SUCCESS,
    ARTICLES_FETCH_SUCCESS,
    FETCHING_ERROR
} from './types';

const INITIAL_URL = 'http://192.168.1.3:3000/articles';


export const fetchInitialArticles = () => {
    return (dispatch) => {
        dispatch({ type: FETCHING_ARTICLES });
        fetch(INITIAL_URL)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                dispatch({ type: INITIAL_ARTICLES_FETCH_SUCCESS, payload: responseJson });
            })
            .catch((error) => {
                console.error(error);
                dispatch({ type: FETCHING_ERROR });
            });

    };
};



