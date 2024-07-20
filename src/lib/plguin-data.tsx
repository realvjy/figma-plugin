export type pluginDatatype = {
  name: string;
  manifestId: string;
  slug: string;
  author: string;
  type: "free" | "paid" | "freemium" | "soon";
  hide?: false;
  featured?: false;
  downloads: number;
  likes: number;
  logoType?: "circle";
  description?: string;
  figmaurl: string;
  id: number;
};

// see public folder for thumbnail and logos
// TODO: automate fetching downloads
export const pluginData: pluginDatatype[] = [
  {
    id: 1,
    name: "3dicons",
    manifestId: "1107546399747513238",
    description: "High quality hand crafted open-source 3d icons",
    slug: "3dicons",
    author: "realvjy",
    type: "free",
    downloads: 169000,
    likes: 1700,
    figmaurl:
      "https://www.figma.com/community/plugin/1107546399747513238/3dicons",
  },
  {
    id: 2,
    name: "Noisy Gradients",
    manifestId: "1174390287006360600",
    slug: "noisy-gradients",
    description: "Create cool gradient backgrounds with noise",
    author: "realvjy",
    type: "freemium",
    downloads: 180000,
    likes: 2600,
    figmaurl:
      "https://www.figma.com/community/plugin/1174390287006360600/noisy-gradients",
  },
  {
    id: 3,
    name: "Illlustrations",
    manifestId: "1124370159336948073",
    slug: "illlustrations",
    description:
      "Insert all 120+ illustrations from the illustrations.co open-source library",
    author: "realvjy",
    type: "free",
    downloads: 218000,
    likes: 504,
    figmaurl: "https://www.figma.com/community/file/810922307190314237",
  },
  {
    id: 4,
    name: "uilogos",
    manifestId: "1107546399747513238",
    description: "Free Professional logos placeholder, brand logos and flags",
    slug: "uilogos",
    author: "realvjy",
    type: "free",
    downloads: 22000,
    likes: 218000,
    figmaurl:
      "https://www.figma.com/community/plugin/1120667703468196103/uilogos",
  },
  {
    id: 5,
    name: "Hues & Gradients",
    manifestId: "1361736324008749685",
    slug: "hues-and-gradients",
    description: "Explore millions of color hues/shades/tones & gradients",
    author: "realvjy",
    type: "free",
    downloads: 5100,
    likes: 200,
    figmaurl:
      "https://www.figma.com/community/plugin/1361736324008749685/hues-gradients",
  },
  {
    id: 6,
    name: "Gradient Map",
    manifestId: "1280452653001223747",
    slug: "gradient-map",
    description: "Generate photoshop like gradient map in figma.",
    author: "realvjy",
    type: "free",
    downloads: 8600,
    likes: 210,
    figmaurl:
      "https://www.figma.com/community/plugin/1280452653001223747/gradient-map",
  },
  {
    id: 7,
    name: "SVG to Code",
    manifestId: "1348045528828166727",
    slug: "svg-to-code",
    description: "Generate SVG react components from selected object.",
    author: "realvjy",
    type: "free",
    downloads: 1700,
    likes: 64,
    figmaurl:
      "https://www.figma.com/community/plugin/1348045528828166727/svg-to-code-react-component",
  },
  {
    id: 8,
    name: "Random Hues",
    manifestId: "1128028298799358676",
    slug: "random-hues",
    description: "A widget to generate colors and gradients",
    author: "realvjy",
    type: "free",
    downloads: 195000,
    likes: 606,
    figmaurl:
      "https://www.figma.com/community/widget/1128028298799358676/random-hues",
  },
  {
    id: 8,
    name: "Project Dots",
    manifestId: "1128028298799358676",
    slug: "project-dots",
    description: "Generate random dots like stippling on a path",
    author: "realvjy",
    type: "soon",
    downloads: 0,
    likes: 0,
    figmaurl: "https://x.com/realvjy/status/1628367876238475267",
  },
];
