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

export interface NavigationItem {
  name: string;
  address: string;
};

export interface FormDataType {
  email: string;
};

//use format type for others below especially on recipe such as image etc..
export interface User {
  name?: string | null | undefined;
  role?: string;
  userName?: string;
  accessToken?: string;
}
