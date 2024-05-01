import localFont from "next/font/local";

const crismonPro = localFont({
  src: "./CrismonPro/CrimsonPro-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-crismon-pro",
});

const BDOGrotesk = localFont({
  src: "./BDOGrotesk/BDOGrotesk-VF.woff2",
  display: "swap",
  variable: "--font-bdo-grotesk",
});

const neueHaasGrotesk = localFont({
  src: [
    {
      path: "./NeueHaasGrotesk/NeueHaasGrotDisp-15XXThin-Trial.otf",
      style: "normal",
      weight: "100",
    },
    {
      path: "./NeueHaasGrotesk/NeueHaasGrotDisp-16XXThinItalic-Trial.otf",
      style: "italic",
      weight: "100",
    },
    {
      path: "./NeueHaasGrotesk/NeueHaasGrotDisp-25XThin-Trial.otf",
      style: "normal",
      weight: "200",
    },
    {
      path: "./NeueHaasGrotesk/NeueHaasGrotDisp-26XThinItalic-Trial.otf",
      style: "italic",
      weight: "200",
    },
    {
      path: "./NeueHaasGrotesk/NeueHaasGrotDisp-35Thin-Trial.otf",
      style: "normal",
      weight: "300",
    },
    {
      path: "./NeueHaasGrotesk/NeueHaasGrotDisp-36ThinItalic-Trial.otf",
      style: "italic",
      weight: "300",
    },
    {
      path: "./NeueHaasGrotesk/NeueHaasGrotDisp-45Light-Trial.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./NeueHaasGrotesk/NeueHaasGrotDisp-46LightItalic-Trial.otf",
      style: "italic",
      weight: "400",
    },
    {
      path: "./NeueHaasGrotesk/NeueHaasGrotDisp-55Roman-Trial.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "./NeueHaasGrotesk/NeueHaasGrotDisp-56Italic-Trial.otf",
      style: "italic",
      weight: "500",
    },
    {
      path: "./NeueHaasGrotesk/NeueHaasGrotDisp-65Medium-Trial.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "./NeueHaasGrotesk/NeueHaasGrotDisp-66MediumItalic-Trial.otf",
      style: "italic",
      weight: "500",
    },
    {
      path: "./NeueHaasGrotesk/NeueHaasGrotDisp-75Bold-Trial.otf",
      style: "normal",
      weight: "600",
    },
    {
      path: "./NeueHaasGrotesk/NeueHaasGrotDisp-76BoldItalic-Trial.otf",
      style: "italic",
      weight: "600",
    },
    {
      path: "./NeueHaasGrotesk/NeueHaasGrotDisp-95Black-Trial.otf",
      style: "normal",
      weight: "700",
    },
    {
      path: "./NeueHaasGrotesk/NeueHaasGrotDisp-96BlackItalic-Trial.otf",
      style: "italic",
      weight: "700",
    },
  ],
});

export { crismonPro, BDOGrotesk, neueHaasGrotesk };
