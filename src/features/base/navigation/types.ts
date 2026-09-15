export type NavLink = {
  id: string;
  label: string;
  href: string;
  children?: NavLink[];
  disabled?: boolean;
};

export type FooterLinkGroup = {
  id: string;
  title: string;
  links: NavLink[];
};
