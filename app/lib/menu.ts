import {
  MenuItem,
  MenuItemTree,
} from "@/app/types/menu";

export function buildMenuTree(
  items: MenuItem[]
): MenuItemTree[] {
  const map = new Map<string, MenuItemTree>();

  const roots: MenuItemTree[] = [];

  items.forEach((item) => {
    map.set(item.id, {
      ...item,
      children: [],
    });
  });

  items.forEach((item) => {
    const current = map.get(item.id);

    if (!current) return;

    if (item.parentId) {
      const parent = map.get(item.parentId);

      if (parent) {
        parent.children.push(current);
      } else {
        roots.push(current);
      }
    } else {
      roots.push(current);
    }
  });

  return roots;
}