import React from "react";
import { Input as AntdInput } from "antd";

export interface InputProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  size?: "small" | "middle" | "large";
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  status?: "warning" | "error";
  prefix?: React.ReactNode;
  type?: "text" | "password" | "email" | "number" | "textarea";
}

const Input: React.FC<InputProps> = ({
  value,
  placeholder = "Enter text...",
  disabled = false,
  size = "middle",
  status,
  prefix,
  type = "text",
  onChange,
}) => {
  return type === "textarea" ? (
    <AntdInput.TextArea
      className="!w-[300px]"
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      size={size}
      status={status}
      onChange={onChange}
    />
  ) : (
    <AntdInput
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      size={size}
      prefix={prefix}
      type={type}
      status={status}
      onChange={onChange}
    />
  );
};

export default Input;
