import { home } from "./content";

// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://demo.magic-portfolio.com";

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": true,
};

const display = {
  location: true,
  time: true,
  themeSwitcher: true
};

const protectedRoutes = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true,
};

import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

const style = {
  theme: "light",
  brand: "brand",
  accent: "accent",
  neutral: "neutral",
  border: "playful",
  solid: "contrast",
  solidStyle: "flat",
  surface: "filled",
  transition: "all",
};

const colors = {
  brand: {
    100: "#000d06",
    200: "#041b12",
    300: "#2e463b",
    400: "#496155",
    500: "#627b6f",
    600: "#829c8f",
    "600-10": "rgba(130,156,143,0.1)",
    "600-30": "rgba(130,156,143,0.3)",
    "600-50": "rgba(130,156,143,0.5)",
    700: "#a1bcae",
    800: "#c0dcce",
    900: "#cde9db",
    1000: "#daf6e8",
    1100: "#e1fdef",
    1200: "#e7fff5",
  },
  accent: {
    100: "#020c06",
    200: "#0c1912",
    300: "#35443c",
    400: "#505f56",
    500: "#697970",
    600: "#8a9a90",
    "600-10": "rgba(138,154,144,0.1)",
    "600-30": "rgba(138,154,144,0.3)",
    "600-50": "rgba(138,154,144,0.5)",
    700: "#a8b9af",
    800: "#c8d9cf",
    900: "#d5e6dc",
    1000: "#e2f4e9",
    1100: "#e9faf0",
    1200: "#ecfef3",
  },
  neutral: {
    100: "#090909",
    200: "#161616",
    300: "#404040",
    400: "#5b5b5b",
    500: "#777777",
    600: "#959595",
    "600-10": "rgba(149,149,149,0.1)",
    "600-30": "rgba(149,149,149,0.3)",
    "600-50": "rgba(149,149,149,0.5)",
    700: "#b4b4b4",
    800: "#d4d4d4",
    900: "#e1e1e1",
    1000: "#eeeeee",
    1100: "#f5f5f5",
    1200: "#fcfcfc",
  }
};

const dataStyle = {
  variant: "gradient",
  mode: "categorical",
  height: 24,
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false
  },
};

const effects = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    opacity: 100,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: true,
    opacity: 40,
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

const mailchimp = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: true,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      opacity: 90,
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      tilt: 0,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
    },
    dots: {
      display: true,
      opacity: 20,
      size: "2",
      color: "brand-on-background-weak",
    },
    grid: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      width: "0.25rem",
      height: "0.25rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  }
};

const schema = {
  logo: "",
  type: "Organization",
  name: "Once UI",
  description: home.description,
  email: "lorant@once-ui.com",
};

const sameAs = {
  threads: "https://www.threads.com/@once_ui",
  linkedin: "https://www.linkedin.com/company/once-ui/",
  discord: "https://discord.com/invite/5EyAQ4eNdS",
};

export { display, mailchimp, routes, protectedRoutes, baseURL, fonts, style, colors, schema, sameAs, effects, dataStyle };


