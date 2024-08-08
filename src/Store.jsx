import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CreateSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "persist-store",
  storage,
};
const persistedReducer = persistReducer(persistConfig, counterSlice);
const store = configureStore({
  reducer: {
    count: persistedReducer,
  },
});
export const persistor = persistStore(store);
export default store;
