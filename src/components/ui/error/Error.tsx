import { ErrorProps } from "../../../types/forms.type";
import "./Error.css";

export const Error = ({ errorMessage, show }: ErrorProps) => {
  return <>{show ? <p className="error">{errorMessage}</p> : null}</>;
};
