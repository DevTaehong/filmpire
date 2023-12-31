import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';
import genreOrCategoryReducer from '../features/currentGenreOrCategory';
import userReducer from '../features/auth';

// https://redux-toolkit.js.org/tutorials/rtk-query
// NOTE - 3. Step three - Add the reducer to the store (Go to step 4 with that link below)
// LINK /Users/taehong/Downloads/filmpire_jsm/src/services/TMDB.js
export default configureStore({
  reducer: {
    // Here we will be adding reducers
    [tmdbApi.reducerPath]: tmdbApi.reducer,

    // NOTE: genreOrCategoryReducer is from '../features/currentGenreOrCategory'
    genreOrCategory: genreOrCategoryReducer,

    // For auth in features/auth.js
    user: userReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});
