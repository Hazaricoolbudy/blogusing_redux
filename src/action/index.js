import jsonplaceholder from "../api/jsonplaceholder";

export const fetchPost = async () => {
    const response = await jsonplaceholder.get('/posts')
    return {
        type: 'FETCH_POST',
        payload: response
    };

};