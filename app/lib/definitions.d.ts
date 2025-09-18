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
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface FieldValuePair {
  field: string;
  value: string;
}

export interface Geo {
  lat: string;
  lng: string;
}
