import { Button } from "../../components/ui/button/Button";
import { ButtonProps } from "../../types/forms.type";

export const CalculateTaxButton = ({ onClickHandle, disabled }: ButtonProps) => {
  return (
    <Button onClickHandle={onClickHandle} disabled={disabled} type="submit">
      Calculate
    </Button>
  );
};
