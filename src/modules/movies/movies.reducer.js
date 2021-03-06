import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function (state = initialState.movies, action) {
	switch (action.type) {

		case types.SET_LOCALES:
			return {
				...state,
				appLocales: action.payload,
			};

		case types.RETRIEVE_FAVORITES_SUCCESS:
			return {
				...state,
				favorites: action.favorites
			};

		case types.RETRIEVE_POPULAR_MOVIES_SUCCESS:
			return {
				...state,
				popularMovies: action.popularMovies
			};

		case types.RETRIEVE_NOWPLAYING_MOVIES_SUCCESS:
			return {
				...state,
				nowPlayingMovies: action.nowPlayingMovies
			};

		case types.RETRIEVE_MOVIES_GENRES_SUCCESS:
			return {
				...state,
				genres: action.moviesGenres
			};

		case types.RETRIEVE_MOVIES_LIST_SUCCESS:
			return {
				...state,
				list: action.list
			};

		case types.RETRIEVE_MOVIE_DETAILS_SUCCESS:
			return {
				...state,
				details: action.details
			};

		case types.RETRIEVE_MOVIES_SEARCH_RESULT_SUCCESS:
			return {
				...state,
				searchResults: action.searchResults
			};
		case types.RETRIEVE_MOVIES_SIMILAR_SUCCESS:
			return {
				...state,
				similar: action.similarPayload
			};
		default:
			return state;
	}
}
