import Link from "next/link";
import type { MenuItem } from "@/app/types/menu";

type HeaderMenuProps = {
  items: MenuItem[];
};

type MenuTreeItem = MenuItem & {
  children: MenuTreeItem[];
};

function buildMenuTree(
  items: MenuItem[]
): MenuTreeItem[] {
  const map = new Map<string, MenuTreeItem>();
  const roots: MenuTreeItem[] = [];

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
      }
    } else {
      roots.push(current);
    }
  });

  return roots;
}

function getHref(item: MenuItem) {
  return item.path && item.path !== "#"
    ? item.path
    : "#";
}

export default function HeaderMenu({
  items,
}: HeaderMenuProps) {
  const menuTree = buildMenuTree(items);

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-8 xl:gap-11">
        {menuTree.map((item) => (
          <li
            key={item.id}
            className="group relative"
          >
            <Link
              href={getHref(item)}
              target={item.target || undefined}
              className="
                relative
                inline-flex
                items-center
                gap-2
                text-[12px]
                font-medium
                uppercase
                tracking-[0.16em]
              "
            >
              {item.label}

              {item.children.length > 0 && (
                <span className="text-[9px]">
                  ▾
                </span>
              )}

              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-px
                  w-0
                  bg-current
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </Link>

            {item.children.length > 0 && (
              <div
                className="
                  invisible
                  absolute
                  left-0
                  top-full
                  z-50
                  min-w-[220px]
                  translate-y-3
                  pt-6
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:visible
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                <div
                  className="
                    bg-[#ff1c0d]
                    text-[#fff]
                    shadow-lg
                  "
                >
                  <ul className="space-y-4">
                    {item.children.map(
                      (child) => (
                        <li key={child.id}>
                          <Link
                            href={getHref(child)}
                            target={
                              child.target ||
                              undefined
                            }
                            className="
                              px-4
                              py-3
                              block
                              whitespace-nowrap
                              text-[12px]
                              uppercase
                              text-white
                              font-bold
                              hover:bg-[#ff958e]
                            "
                          >
                            {child.label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}