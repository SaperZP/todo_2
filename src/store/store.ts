import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosReducer';

export const store = configureStore({
  reducer: {
    todosData: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
