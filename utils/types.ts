import { ReactNode } from "react";

//footer social props
export interface SocialIconProps {
  href: string;
  icon: ReactNode;
  label: string;
};

//user features steps
export interface FeaturesDataProps {
  icon: string;
  desc: string;
  title: string;

};

//navigation types
export interface NavigationItem {
  name: string;
  address: string;
};

//cta email type
export interface FormDataType {
  email: string;
};

//recipe data type
export type RecipeListProps = {
  recipeId: string;
  recipeImg: string;
  category: string;
  title: string;
  accessType: string;
  likes: string;

  authorId: string;
  authorImage: string;
  authorName: string;
  authorStatus: string;
};

//category data type
export type CategoryListProps = {
  categoryId: string;
  categoryImage: string;
  categoryName: string;
}[];




//use format type for others below especially on recipe such as image etc..
export interface User {
  name?: string | null | undefined;
  role?: string;
  userName?: string;
  accessToken?: string;
}
