// store.ts
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categoryReducer";
import recipeReducer from "./recipeReducer";

export const store = configureStore({
  reducer: {
    selectedCategory: categoryReducer,
    selectedRecipe: recipeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
