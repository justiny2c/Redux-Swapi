// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const FETCH_CHARS_START = "FETCH_CHARS_START";
export const FETCH_CHARS_SUCCESS = "FETCH_CHARS_SUCCESS";
export const FETCH_CHARS_FAILED = "FETCH_CHARS_FAILED";

export const getChars = () => dispatch => {
    dispatch({ type: FETCH_CHARS_START });
    axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
            // console.log(res.data.results)
            dispatch({ type: FETCH_CHARS_SUCCESS, payload: res.data.results })
        })
        .catch(err => {
            dispatch ({ type: FETCH_CHARS_FAILED, payload: err })
        })
}
