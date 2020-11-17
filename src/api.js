import axios from "axios-jsonp-pro";

// Books API USE
const key = "8EC54B847E010A2B9A0E3C7D47A40C5A51AD98F717F89BBA69AC169248272135";

export const BooksApi = {
  BestSeller: () =>
    axios.jsonp(
      `https://book.interpark.com/api/bestSeller.api?key=${key}&categoryId=100&output=json`
    ),
  Recommend: () =>
    axios.jsonp(
      `https://book.interpark.com/api/recommend.api?key=${key}&categoryId=100&output=json`
    ),
  NewBook: () =>
    axios.jsonp(
      `https://book.interpark.com/api/newBook.api?key=${key}&categoryId=100&output=json`
    ),
};

export const searchBooks = {
  search: (term) => {
    return axios.jsonp(
      `https://book.interpark.com/api/search.api?key=${key}&query=${term}&maxResults=50&inputEncoding=utf-8&output=json`
    );
  },
};

export const BooksDetailApi = {
  isbnDetail: (isbn) => {
    return axios.jsonp(
      `https://book.interpark.com/api/search.api?key=${key}&query=${isbn}&output=json&queryType=isbn`
    );
  },
};

// Movie & TV API USE
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "d5fcb290fa5dbfc63ac480d8e021fabb",
    language: "en-US",
  },
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
