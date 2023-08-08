import { Control, FieldValues } from "react-hook-form";

export interface IFormInputs {
  firstName: string;
  email: string;
  password: string;
}

export interface IController {
  name: keyof IFormInputs;
  control: Control<IFormInputs>;
  rules?: FieldValues;
  placeholder?: string;
  variant?: "filled" | "transparent";
  className?: string;
}
