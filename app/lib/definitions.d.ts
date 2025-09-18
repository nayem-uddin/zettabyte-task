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
