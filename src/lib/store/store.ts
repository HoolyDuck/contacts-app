import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, type RootState, type AppDispatch };
