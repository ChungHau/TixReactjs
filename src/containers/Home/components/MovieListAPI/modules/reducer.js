import { MOVIELIST_REQUEST, MOVIELIST_SUCCESS, MOVIELIST_FAILED , MOVIELIST_SEARCH } from "./constant"

  let initialState = {
    loading: false,
    data: null,
    error: null,
    searchTerm: "",
  };
  
  const movieListReducer = (state = initialState, action) => {
    switch (action.type) {
      case MOVIELIST_REQUEST: {
        state.loading = true;
        state.data = null;
        state.error = null;
        return { ...state };
      }
      case MOVIELIST_SUCCESS: {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        return { ...state };
      }
      case MOVIELIST_FAILED: {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
        return { ...state };
      }
      case MOVIELIST_SEARCH : {
        state.searchTerm = action.payload;
        return {...state}
      }
      default:
        return { ...state };
    }
  };
  export default movieListReducer;
  