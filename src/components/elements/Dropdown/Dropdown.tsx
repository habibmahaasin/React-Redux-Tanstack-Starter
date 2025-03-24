import React from "react";
import { Dropdown as AntdDropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

export interface DropdownProps {
  items: { key: string; label: string }[];
  onSelect?: (key: string) => void;
  placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  buttonLabel?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  onSelect,
  placement = "bottomLeft",
  buttonLabel = "Open Dropdown",
}) => {
  const menu = <Menu onClick={({ key }) => onSelect?.(key)} items={items} />;

  return (
    <AntdDropdown overlay={menu} trigger={["click"]} placement={placement}>
      <Button>
        {buttonLabel} <DownOutlined />
      </Button>
    </AntdDropdown>
  );
};

export default Dropdown;
