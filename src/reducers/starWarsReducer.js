import { FETCH_CHARS_START, FETCH_CHARS_SUCCESS, FETCH_CHARS_FAILED } from "../actions";

const initialState = {
  characters: [],
  isLoading: false,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHARS_START: 
      return {
        ...state,
        error: "",
        isLoading: true
      }
    case FETCH_CHARS_SUCCESS:
        return {
          ...state,
          characters: action.payload,
          isLoading: false
        }
    case FETCH_CHARS_FAILED: 
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        }
    default:
      return state;
  }
};
