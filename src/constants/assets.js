// Asset paths — all images from the Pixso design export folder.
// Prefix with Vite's BASE_URL so paths resolve correctly in both dev and
// production builds (the app is served under a sub-path base).
const base = import.meta.env.BASE_URL

export const ASSETS = {
  logo: `${base}assets/package.png`,
  banner: `${base}assets/banner.png`,
  play: `${base}assets/Play.png`,
  rocket: `${base}assets/rocket.png`,
  user: `${base}assets/user.png`,
  cart: `${base}assets/products/shopping-cart.png`,
  products: {
    writing: `${base}assets/products/writing-tool.png`,
    design: `${base}assets/products/design-tool.png`,
    operation: `${base}assets/products/operation.png`,
    portfolio: `${base}assets/products/portfolio.png`,
    social: `${base}assets/products/social-media.png`,
    package: `${base}assets/package.png`,
  },
}
