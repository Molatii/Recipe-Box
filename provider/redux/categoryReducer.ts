//categoryReducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  selectedCategoryName: string | null;
}

const initialState: CategoryState = {
  selectedCategoryName: null,
};

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategoryName = action.payload;
    },
  },
});

export const { selectCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
