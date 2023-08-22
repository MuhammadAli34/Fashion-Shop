import { combineReducers, configureStore } from "@reduxjs/toolkit";

import fashionshopSlice from "./fashionShopSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["apiProductSlice"],
};

const persistedReducer = persistReducer(persistConfig, fashionshopSlice);
export const store = configureStore({
  reducer: { fashion: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
