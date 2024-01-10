//recipeReducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RecipeState {
  selectedRecipe: string | null;
}

const initialRecipeState: RecipeState = {
  selectedRecipe: null,
};

const RecipeSlice = createSlice({
  name: "recipe",
  initialState: initialRecipeState,
  reducers: {
    selectRecipe: (state, action: PayloadAction<string>) => {
      state.selectedRecipe = action.payload;
    },
  },
});

export const { selectRecipe } = RecipeSlice.actions;
export default RecipeSlice.reducer;
