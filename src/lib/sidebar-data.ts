import { categorie_ac, categorie_ac_i, custom_quote_management_ac, custom_quote_management_ac_i, dashboard_ac, dashboard_i_ac, news_management_ac, news_management_ac_i, order_management_ac, order_management_ac_i, quote_management_ac, quote_management_ac_i, setting_ac, setting_i_ac, } from "@/icon/dbIcon";




export interface MenuItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
    inactiveIcon?: React.ComponentType<any>;
  badge?: string;
    children?: MenuItem[];
    title?: string; 
  subtitle?: string; 
}



// Main menu items
export const SidebarItems: MenuItem[] = [
  { 
    name: "Dashboard", 
    href: "/admin", 
    icon: dashboard_ac, // Active icon
    inactiveIcon: dashboard_i_ac, // Inactive icon
    title: "Dashboard management",
  },
  { 
    name: "Category Management", 
    href: "/admin/category-management", 
    icon: categorie_ac, // Active icon
    inactiveIcon: categorie_ac_i, // Inactive icon
    title: "Category management",
    subtitle: "",
  },
  { 
    name: "Quote Management", 
    href: "/admin/quote-management", 
    icon: quote_management_ac, // Active icon
    inactiveIcon: quote_management_ac_i, // Inactive icon
    title: "Quote management",
    subtitle: "",
  },
  { 
    name: "Custom Quote Management", 
    href: "/admin/custom_quote_management", 
    icon: custom_quote_management_ac, // Active icon
    inactiveIcon: custom_quote_management_ac_i, // Inactive icon
    title: "Custom Quote management",
    subtitle: "",
  },
  { 
    name: "Order Management", 
    href: "/admin/order-management", 
    icon:order_management_ac , // Active icon
    inactiveIcon: order_management_ac_i, // Inactive icon
    title: "Order management",
    subtitle: "",
  },
  { 
    name: "News Management", 
    href: "/admin/news-management", 
    icon: news_management_ac, // Active icon
    inactiveIcon: news_management_ac_i, // Inactive icon
    title: "News Management",
    subtitle: "",
  },
   {
    name: "Settings",
    href: "/admin/settings",
    icon: setting_ac, // Active icon
    inactiveIcon: setting_i_ac, // Inactive icon
    title: "System Settings",
    subtitle: "",
    // children: [
    //   {
    //     name: "Change Password",
    //     href: "/admin/settings/change-password",
    //     icon: categorie_ac, // Active icon
    //     inactiveIcon: categorie_ac_i, // Inactive icon
    //     title: "Change Password",
    //     subtitle: "Update your account password for security.",
    //   },
    //   {
    //     name: "Privacy Policy",
    //     href: "/admin/settings/privacy-policy",
    //     icon: dashboard_ac, // Active icon
    //     inactiveIcon: dashboard_i_ac, // Inactive icon
    //     title: "Privacy Policy",
    //     subtitle: "Review our privacy policy and data protection terms.",
    //   },

    // ],
  },
];



// Helper function to get page info by pathname
export const getPageInfo = (pathname: string): { title: string; subtitle?: string } => {
  // Recursive function to search in nested items
const findItem = (items: MenuItem[]): MenuItem | undefined => {
  for (const item of items) {
    // Match exact path OR any sub-path (e.g., /admin/category-management/anything)
    if (pathname === item.href || pathname.startsWith(item.href + "/")) {
      return item;
    }
    if (item.children) {
      const found = findItem(item.children);
      if (found) return found;
    }
  }
  return undefined;
};

  const item = findItem(SidebarItems);
  
  return {
    title: item?.title || "Page",
    subtitle: item?.subtitle,
  };
};


// Nested route active for changes --------> [sidebar-menu-list component] 