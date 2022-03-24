import { combineReducers } from "redux";
import MoviesReducer from "./reducer-movies";
import TotalPagesReducer from "./reducer-total-pages";
import AuthReducer from './reducer-auth';
import WatchListMoviesReducer from './reducer-watchlist-movies';
import WatchListCountReducer from './reducer-watchlist-count';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  watchListMovies: WatchListMoviesReducer,
  total_pages: TotalPagesReducer,
  auth: AuthReducer,
  watchListCount: WatchListCountReducer
});

export default rootReducer;