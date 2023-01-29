import { TError } from "../../../types/forms.type";
import "./Error.css";

export const Error = ({ errorMessage, show }: TError) => {
  return <>{show ? <p className="error">{errorMessage}</p> : null}</>;
};
