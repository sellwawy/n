import * as actionTypes from "../constants/ActionTypes";

const initialState = {
  isLoading: false,
  error: false,
  movies: [],
  movieName: "",
  category:""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_HOMEPAGE_DATA:
      return {
        ...state,
        movies: action.movies,
        error: null,
        isLoading: false
      };
    case actionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      };
    case actionTypes.IS_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case actionTypes.SEARCH_INPUT_SUCCESS:
      return {
        ...state,
        movieName: action.payload
      };
    case actionTypes.CATEGORY_INPUT_SUCCESS:
      return {
        ...state,
        category: action.payload
      };
    case actionTypes.GET_MOVIES_LOADING:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case actionTypes.GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
