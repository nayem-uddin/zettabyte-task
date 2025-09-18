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
