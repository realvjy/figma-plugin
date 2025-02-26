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
export const pluginData: pluginDatatype[] = [
  {
    id: 1,
    name: "3dicons",
    manifestId: "1107546399747513238",
    description: "High quality hand crafted open-source 3d icons",
    slug: "3dicons",
    author: "realvjy",
    type: "free",
    downloads: 190000,
    likes: 2100,
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
    downloads: 230000,
    likes: 3500,
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
    figmaurl: "https://www.figma.com/community/plugin/1124370159336948073",
  },
  {
    id: 4,
    name: "uilogos",
    manifestId: "1107546399747513238",
    description: "Free Professional logos placeholder, brand logos and flags",
    slug: "uilogos",
    author: "realvjy",
    type: "free",
    downloads: 25000,
    likes: 490,
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
    downloads: 7100,
    likes: 290,
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
    downloads: 11000,
    likes: 310,
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
    downloads: 2400,
    likes: 100,
    figmaurl:
      "https://www.figma.com/community/plugin/1348045528828166727/svg-to-code-react-component",
  },
  {
    id: 8,
    name: "Random Hues",
    manifestId: "1361736324008749685",
    slug: "random-hues",
    description: "A widget to generate colors and gradients",
    author: "realvjy",
    type: "free",
    downloads: 7000,
    likes: 300,
    figmaurl:
      "https://www.figma.com/community/widget/1128028298799358676/random-hues",
  },
  {
    id: 9,
    name: "Shape Shifter",
    manifestId: "1406930998097962760",
    slug: "shape-shifter",
    description: "Figma companion for vector/illustration work",
    author: "realvjy",
    type: "free",
    downloads: 3900,
    likes: 206,
    figmaurl:
      "https://www.figma.com/community/plugin/1406930998097962760/shape-shifter",
  },
  {
    id: 11,
    name: "Stippling",
    manifestId: "1409794712197371392",
    slug: "stippling",
    description: "Generate dots like stippling or halftone effect",
    author: "realvjy",
    type: "free",
    downloads: 10000,
    likes: 900,
    figmaurl: "https://s.vjy.me/stippling",
  },
  {
    id: 15,
    name: "Animate it",
    manifestId: "1470719638106565683",
    slug: "animate-it",
    description: "Create smart component with predefine animation set",
    author: "realvjy",
    type: "free",
    downloads: 6500,
    likes: 200,
    figmaurl: "https://www.figma.com/community/plugin/1470719638106565683",
  },
  {
    id: 12,
    name: "My Invoice",
    manifestId: "1128028298799398676",
    slug: "my-invoice",
    description: "Easily create and customize invoices directly in Figma",
    author: "realvjy",
    type: "free",
    downloads: 1300,
    likes: 130,
    figmaurl: "https://s.vjy.me/invoice-plugin",
  },
  {
    id: 13,
    name: "Project Wave",
    manifestId: "1430118694216929246",
    slug: "wavify",
    description: "Generate wave on selected vector or shape",
    author: "realvjy",
    type: "soon",
    downloads: 0,
    likes: 0,
    figmaurl: "https://s.vjy.me/project-wave",
  },
  {
    id: 14,
    name: "Project DS",
    manifestId: "1430118694216929246",
    slug: "project-ds",
    description: "Generate Color and typography variables",
    author: "realvjy",
    type: "soon",
    downloads: 0,
    likes: 0,
    figmaurl: "https://s.vjy.me/project-ds",
  }
];
