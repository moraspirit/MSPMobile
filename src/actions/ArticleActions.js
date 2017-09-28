import {
    FETCHING_ARTICLE,
    ARTICLE_FETCH_SUCCESS,
    FETCHING_ERROR
} from './types';

let uri = 'http://128.199.230.133/articles/:';

if (process.env.NODE_ENV != 'production') {
    uri = 'http://192.168.1.3:8080/articles/:';
}

export const fetchArticle = (nid) => {
    return (dispatch) => {
        dispatch({ type: FETCHING_ARTICLE });
        fetch(uri + nid)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                dispatch({ type: ARTICLE_FETCH_SUCCESS, payload: responseJson[0] });
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: FETCHING_ERROR });
            });

    };
};



