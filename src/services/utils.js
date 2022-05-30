export const API_KEY = "?api_key=caff587bf7681f7e6b2729589b784ce6";
export const LANG_ES = "&language=es-ES";
export const API_URL = "https://api.themoviedb.org/3/";
export const BASE_MOVIE_URL = API_URL+"movie/";
export const BASE_SERIE_URL = API_URL+"tv/";
export const BASE_SEARCH_MOVIE_URL = API_URL+"search/movie"+API_KEY+LANG_ES+"&query=";
export const BASE_SEARCH_SERIE_URL = API_URL+"search/movie";
export const LATEST_MOVIES_URL = API_URL+"movie/now_playing"+API_KEY+LANG_ES+"&region=ES";
export const POPULAR_MOVIES_URL = API_URL+ "movie/popular"+API_KEY+LANG_ES;
export const POPULAR_SERIES_URL = API_URL+ "tv/popular"+API_KEY+LANG_ES;
export const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500"
export const GET_GENRES_URL = API_URL+"genre/movie/list"+API_KEY+LANG_ES;