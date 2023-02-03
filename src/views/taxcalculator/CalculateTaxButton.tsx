import { Button } from "../../components/ui/button/Button";
import { TButton } from "../../types/forms.type";

export const CalculateTaxButton = ({ onClickHandle, disabled }: TButton) => {
  return (
    <Button onClickHandle={onClickHandle} disabled={disabled} type="submit">
      Calculate
    </Button>
  );
};
