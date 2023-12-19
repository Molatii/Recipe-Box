export interface NavigationItem {
  name: string;
  address: string;
}

//use format type for others below especially on recipe such as image etc..
export interface User {
  name?: string | null | undefined;
  role?: string;
  userName?: string;
  accessToken?: string;
}
