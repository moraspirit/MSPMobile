import {
    FETCHING_ARTICLE,
    ARTICLE_FETCH_SUCCESS,
    FETCHING_ERROR
} from './types';

const END_POINT = 'http://192.168.1.3:3000/articles/:';


export const fetchArticle = (nid) => {
    return (dispatch) => {
        dispatch({ type: FETCHING_ARTICLE });
        fetch(END_POINT + nid)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                dispatch({ type: ARTICLE_FETCH_SUCCESS, payload: responseJson[0] });
            })
            .catch((error) => {
                console.error(error);
                dispatch({ type: FETCHING_ERROR });
            });

    };
};



