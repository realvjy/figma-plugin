export type pluginDatatype = {
  name: string;
  manifestId: string;
  slug: string;
  author: string;
  type: "free" | "paid" | "freemium";
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
    id: 1,
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
    id: 1,
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
    id: 1,
    name: "SVG to Code",
    manifestId: "1348045528828166727",
    slug: "svg-to-code",
    description:
      "Generate SVG react components from selected object instantly.",
    author: "realvjy",
    type: "free",
    downloads: 1600,
    likes: 218000,
    figmaurl:
      "https://www.figma.com/community/plugin/1348045528828166727/svg-to-code-react-component",
  },
  {
    id: 1,
    name: "uilogos",
    manifestId: "1107546399747513238",
    description: "Free Professional looking logo placeholder ",
    slug: "uilogos",
    author: "realvjy",
    type: "free",
    downloads: 22000,
    likes: 218000,
    figmaurl: "https://www.uilogos.co/",
  },
];
