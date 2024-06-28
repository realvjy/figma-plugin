export type pluginDatatype = {
  name: string,
  id: string,
  slug: string,
  author: string,
  type: "free" | "paid" | "freemium",
  downloads: number,
  logoType?: "circle",
  description?: string,
  url: string
}

// see public folder for thumbnail and logos
// TODO: automate fetching downloads
export const pluginData: pluginDatatype[] = [{
  name: "Illlustrations",
  id: "1107546399747513238",
  slug: "illlustrations",
  description: "100 free illustration created by me",
  author: "realvjy",
  type: "free",
  downloads: 12000,
  url: "https://figma.com"

}, {
  name: "3dicons",
  id: "1107546399747513238",
  description: "High quality hand crafted 3d icons",
  slug: "3dicons",
  author: "realvjy",
  type: "free",
  downloads: 1200,
  url: "https://illlustration.co"
}, {
  name: "Noisy Gradients",
  id: "1107546399747513238",
  slug: "noisy-gradients",
  description: "High quality hand crafted 3d icons",
  author: "realvjy",
  type: "freemium",
  downloads: 1200,
  url: "https://figma.com"
}, {
  name: "Hues & Gradients",
  id: "1107546399747513238",
  slug: "hues-and-gradients",
  description: "High quality hand crafted 3d icons",
  author: "realvjy",
  type: "free",
  downloads: 1200,
  url: "https://illlustration.co"
}, {
  name: "Svg to Code",
  id: "1107546399747513238",
  slug: "svg-to-code",
  description: "High quality hand crafted 3d icons",
  author: "realvjy",
  type: "free",
  downloads: 1200,
  url: "https://illlustration.co"
}, {
  name: "uilogos",
  id: "1107546399747513238",
  description: "High quality hand crafted 3d icons",
  slug: "uilogos",
  author: "realvjy",
  type: "free",
  downloads: 1200,
  url: "https://illlustration.co"
}]