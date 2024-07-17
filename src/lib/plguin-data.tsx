export type pluginDatatype = {
  name: string;
  manifestId: string;
  slug: string;
  author: string;
  type: "free" | "paid" | "freemium";
  downloads: number;
  logoType?: "circle";
  description?: string;
  url: string;
};

// see public folder for thumbnail and logos
// TODO: automate fetching downloads
export const pluginData: pluginDatatype[] = [
  {
    name: "Illlustrations",
    manifestId: "1124370159336948073",
    slug: "illlustrations",
    description:
      "Insert all 120+ illustrations from the illustrations.co open-source library",
    author: "realvjy",
    type: "free",
    downloads: 51000,
    url: "https://illlustrations.co/figma/",
  },
  {
    name: "3dicons",
    manifestId: "1107546399747513238",
    description: "High quality hand crafted 3d icons",
    slug: "3dicons",
    author: "realvjy",
    type: "free",
    downloads: 165000,
    url: "https:/3dicons.co/figma",
  },
  {
    name: "Noisy Gradients",
    manifestId: "1174390287006360600",
    slug: "noisy-gradients",
    description:
      "The plugin uses the Metavatar algorithm to create cool gradient backgrounds with added noise for visual impact.",
    author: "realvjy",
    type: "freemium",
    downloads: 176000,
    url: "https://tools.metavatar.app/figma",
  },
  {
    name: "Hues & Gradients",
    manifestId: "1361736324008749685",
    slug: "hues-and-gradients",
    description:
      "Explore millions of color hues/shades/tones & gradients directly in figma for perfect color palettes that suit your design next project.",
    author: "realvjy",
    type: "free",
    downloads: 4700,
    url: "https://www.figma.com/community/plugin/1361736324008749685/hues-gradients",
  },
  {
    name: "SVG to Code",
    manifestId: "1348045528828166727",
    slug: "svg-to-code",
    description:
      "This Figma (Dev) plugin allows you to generate react components from selected nodes instantly.",
    author: "realvjy",
    type: "free",
    downloads: 1600,
    url: "https://www.figma.com/community/plugin/1348045528828166727/svg-to-code-react-component",
  },
  {
    name: "uilogos",
    manifestId: "1107546399747513238",
    description: "High quality hand crafted 3d icons",
    slug: "uilogos",
    author: "realvjy",
    type: "free",
    downloads: 22000,
    url: "https://www.uilogos.co/",
  },
];
