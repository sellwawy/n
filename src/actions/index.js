import { apiClient } from "../apiClient";
import axios from "axios";
import { toast } from "react-toastify";

import { API_URL, IMAGE_URL } from "../constants/Config";
import * as actionTypes from "../constants/ActionTypes";
import { endpoints } from "../configs";
import { getCookie } from "../lib/helper";

export const getHomePageData = () => dispatch => {
  dispatch({
    type: actionTypes.IS_LOADING,
    isLoading: true
  });
};
export const search = movieName => dispatch => {
  dispatch({
    type: actionTypes.SEARCH_INPUT_SUCCESS,
    payload: movieName
  });
};
export const Category = categories => dispatch => {
  dispatch({
    type: actionTypes.CATEGORY_INPUT_SUCCESS,
    payload: categories
  });
};
export const getMovies = () => dispatch => {
  console.log("Get movies")
  axios
    .get(`${API_URL}/shows`)
    .then(res => {
      console.log("Dispatched",res)
      dispatch({
        type: actionTypes.GET_MOVIES_SUCCESS,
        payload: res.data
      });
    })
    .catch(() => {
      dispatch({
        type: actionTypes.GET_MOVIES_ERROR
      });
    });
};