import { Dispatch, SetStateAction } from "react";

export interface Option {
  label: string;
  link: string;
  logo: SvgIconComponent;
}

export interface ContextType {
  expand: boolean;
  setExpand: Dispatch<SetStateAction<boolean>>;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
