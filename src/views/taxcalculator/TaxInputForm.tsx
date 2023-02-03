import { TAX_ASSESMENT_YEAR } from "../../constants/constants";
import { Input } from "../../components/forms/input/Input";
import { Select } from "../../components/forms/select/Select";
import { TaxInputProps } from "../../types/taxcalculator.type";

const TaxInputForm = ({
  assesmentYearRef,
  onChangeAssesmentYear,
  salaryRef,
  handleSalaryChange
}: TaxInputProps) => {
  return (
    <fieldset>
      <legend  className="legend">
        <span className="number">1</span>Enter Your Details  
      </legend>

      <Select
        refs={assesmentYearRef}
        label="Select assesment year"
        options={TAX_ASSESMENT_YEAR}
        defaultValue={"2021"}
        onChangeYear={onChangeAssesmentYear}
      />
      <Input
        label="Please enter your salary ($)"
        type="number"
        refs={salaryRef}
        onChange={handleSalaryChange}
        autoFocus={true}
        placeholder="Enter salary"
      />
    </fieldset>
  );
};

export default TaxInputForm;
