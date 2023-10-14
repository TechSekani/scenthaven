import { useState } from "react";
import "../styles/payment.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}*</label>
      <input
        id={props.id}
        type={props.type}
        className="form-control"
        value={props.value}
        name={props.name}
        onChange={(e) => props.onChange(e)}
        required
        onBlur={handleFocus}
        focused={focused.toString()}
        pattern={props.pattern}
      />
      <span>{props.errorMsg}</span>
    </div>
  );
};

export default FormInput;
