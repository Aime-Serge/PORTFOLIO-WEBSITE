import { configureStore } from "@reduxjs/toolkit";
import caseStudiesReducer from "./slices/caseStudiesSlice";
import projectsReducer from "./slices/projectsSlice";
import blogsReducer from "./slices/blogsSlice";
import researchReducer from "./slices/researchSlice";

export const store = configureStore({
  reducer: {
    caseStudies: caseStudiesReducer,
    projects: projectsReducer,
    blogs: blogsReducer,
    research: researchReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
