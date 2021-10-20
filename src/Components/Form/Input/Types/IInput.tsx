import { KeyboardEvent } from "react";
import EInputTypes from "./EInputTypes";

export default interface IInput {
  type: EInputTypes;
  isRequired?: boolean;
  placeholder?: string;
  header?: string;
  headerChildren?: JSX.Element | null;
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
  onKeyPress?: (event: KeyboardEvent) => void;
}
