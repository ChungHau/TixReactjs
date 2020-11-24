import { combineReducers } from "redux";
import movieListReducer from "../containers/Home/components/MovieListAPI/modules/reducer";

const rootReducer = combineReducers({
    movieListReducer,
})

export default rootReducer