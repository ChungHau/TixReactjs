import { MOVIELIST_REQUEST, MOVIELIST_SUCCESS, MOVIELIST_FAILED } from "./constant";
import Axios from "axios";
// nhớ sữa tên TYPE với tên hàm tên biến
export const actionFetchMovieList = () => {
  // API
  return (dispatch) => {
    dispatch(actionFetchMovieListRequest());
    Axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actionFetchMovieListSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actionFetchMovieListFailed(error));
      });
  };
};
const actionFetchMovieListRequest = () => {
  return {
    type: MOVIELIST_REQUEST,
  };
};
const actionFetchMovieListSuccess = (data) => {
  return {
    type: MOVIELIST_SUCCESS,
    payload: data,
  };
};
const actionFetchMovieListFailed = (error) => {
  return {
    type: MOVIELIST_FAILED,
    payload: error,
  };
};
