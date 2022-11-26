export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/#main",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];
