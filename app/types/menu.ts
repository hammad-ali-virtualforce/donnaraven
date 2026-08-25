export type MenuItem = {
  id: string;
  parentId: string | null;
  label: string;
  url: string;
  path: string;
  target: string | null;
  cssClasses: string[];
};
export type MenuItemTree =
  MenuItem & {
    children: MenuItemTree[];
  };
export type MenuResponse = {
  nodes: MenuItem[];
};

export type GlobalNavigationResponse = {
  headerMenu: MenuResponse;
  hamburgerMenu: MenuResponse;
};