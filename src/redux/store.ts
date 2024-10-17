import { configureStore } from "@reduxjs/toolkit";
import { enrollmentListSlice } from "./features/enrollmentListSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    enrollmentList: enrollmentListSlice.reducer, // Correctly passing the reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
