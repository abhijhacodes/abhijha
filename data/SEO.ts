import { DefaultSeoProps } from "next-seo";
import { BASE_URL } from "./Links";

const DEFAULT_TITLE = "Abhishek Jha";

export const DEFAULT_SEO_CONFIG: DefaultSeoProps = {
  title: DEFAULT_TITLE,
  canonical: BASE_URL,
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: BASE_URL,
    title: DEFAULT_TITLE,
    images: [
      {
        url: `${BASE_URL}/public/images/abhishek.jpg`,
        alt: DEFAULT_TITLE,
        width: 1280,
        height: 720,
      },
    ],
  },
};
