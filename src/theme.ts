import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#1677ff",
    borderRadius: 24,
    // fontSize: 14,
  },
  components: {
    Button: {
      colorPrimary: "#032730",
      colorTextLightSolid: "#48E0AC",
      colorPrimaryHover: "#03404f",
      colorPrimaryActive: "#03404f",
      controlHeight: 36,
      borderRadius: 24,
      borderRadiusSM: 36,
      borderRadiusLG: 24,
    },
    Input: {
      borderRadius: 24,
      borderRadiusSM: 36,
      borderRadiusLG: 24,

      paddingBlockSM: 4,
      paddingInlineSM: 12,

      paddingBlock: 8,
      paddingInline: 16,

      paddingBlockLG: 8,
      paddingInlineLG: 16,
    },
  },
};

export default theme;
