"use client";

import { usePathname } from "next/navigation";

import SidebarMenuItem from "@/components/sidebar/sidebar-menu-items";
import { MenuItem } from "@/lib/sidebar-data";

interface SidebarMenuListProps {
  items: MenuItem[];
  onItemClick?: () => void;
}

export default function SidebarMenuList({
  items,
  onItemClick,
}: SidebarMenuListProps) {
  const pathname = usePathname();

  return (
    <div className="space-y-1">
      {items.map((item) => {
        let isActive = false;

        if (item.href === "/admin") {
          // Special case for Dashboard: active ONLY on exact "/admin"
          isActive = pathname === "/admin";
        } else {
          // For all other items: active on exact match OR sub-routes
          isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");
        }

        return (
          <SidebarMenuItem
            key={item.href}
            item={item}
            isActive={isActive}
            onClick={onItemClick}
          />
        );
      })}
    </div>
  );
}
