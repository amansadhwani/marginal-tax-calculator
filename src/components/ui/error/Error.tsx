import { TError } from "../../../types/forms.type";
import "./Error.css";

export const Error = ({ errorMessage }: TError) => {
  return <p className="error">{errorMessage}</p>;
};
