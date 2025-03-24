import React from "react";
import { Tag as AntdTag } from "antd";

export interface TagProps {
  color?: string;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
}

const Tag: React.FC<TagProps> = ({
  color = "#48E0AC",
  children,
  closable = false,
  onClose,
}) => {
  return (
    <AntdTag
      color={color}
      closable={closable}
      onClose={onClose}
      style={{
        padding: "0px 16px",
        borderRadius: 18,
        fontSize: 10,
      }}
    >
      {children}
    </AntdTag>
  );
};

export default Tag;
