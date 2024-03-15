import reducers from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

const persistConfig = {
    key: "root",
    storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

const persistor = persistStore(store);

export {store, persistor};



