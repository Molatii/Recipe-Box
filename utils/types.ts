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

//cta email type & reset password
export interface FormDataType {
  email: string;
};
export interface ResetDataType {
  password: string;
  passwordConfirmation: string;
};

//sign in
export interface SignInFormDataType {
  email: string;
  password?: string;
};

//sign up
export interface SignUpFormDataType {
  email: string;
  password: string;
  username: string;
  country: string;
  userProfession: string;
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
};




//use format type for others below especially on recipe such as image etc..
export interface User {
  name?: string | null | undefined;
  role?: string;
  userName?: string;
  accessToken?: string;
}
