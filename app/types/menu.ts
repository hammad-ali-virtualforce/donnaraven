export type MenuItem = {
  id: string;
  parentId: string | null;
  label: string;
  url: string;
  path: string;
  target: string | null;
  cssClasses: string[];
};

export type MenuResponse = {
  nodes: MenuItem[];
};

export type GlobalNavigationResponse = {
  headerMenu: MenuResponse;
  hamburgerMenu: MenuResponse;
};