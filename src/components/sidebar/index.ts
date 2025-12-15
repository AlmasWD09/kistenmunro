// Main component
export { default as Sidebar } from "@/components/sidebar/sidebar";

// Sub-components (for use in other places)
export { default as SidebarMenuItem } from "@/components/sidebar/sidebar-menu-items";
export { default as SidebarMenuList } from "@/components/sidebar/sidebar-menu-list";
export { default as SidebarLogo } from "@/components/sidebar/sidebar-logo";

// Data exports
export { SidebarItems, } from "@/lib/sidebar-data";
export type { MenuItem,} from "@/lib/sidebar-data";