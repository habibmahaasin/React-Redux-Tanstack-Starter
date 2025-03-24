import React from "react";
import { Select as AntdSelect } from "antd";

export interface SelectProps {
  options: { value: string; label: string }[];
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  clearable?: boolean;
  multiple?: boolean;
  placeholder?: string;
  disabled?: boolean;
  searchable?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  clearable = true,
  multiple = false,
  placeholder = "Select an option",
  disabled = false,
  searchable = false,
}) => {
  return (
    <AntdSelect
      mode={multiple ? "multiple" : undefined}
      allowClear={clearable}
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      showSearch={searchable}
      style={{ minWidth: 250, width: "100%" }}
    />
  );
};

export default Select;
