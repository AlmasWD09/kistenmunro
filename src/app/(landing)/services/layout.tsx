import SidebarNav from "@/components/reusable/sideber-nav";
import { ReactNode } from "react";
import news1 from "@/assets/news1.png";
import news2 from "@/assets/news2.png";
import news3 from "@/assets/news3.png";
import SubTitle from "@/components/reusable/title";

interface ServiceLayoutProps {
  children: ReactNode;
}

const ServiceLayout = ({ children }: ServiceLayoutProps) => {
  return (
    <div className="container px-4 xl:mb-10">
      <div className="pt-6 xl:pt-10 pb-10">
      <div className="pb-6">
        <SubTitle svg={false} text="All services"/>
      </div>
        <div className="flex flex-1 flex-col lg:flex-row gap-4  ">
          <div className="block w-full lg:w-[300px] lg:shrink-0 top-24 h-fit ">
            <SidebarNav items={sidebarNavItems} />
          </div>
          
          <div className="flex-1 ">
            {children}
            </div>
        </div>
      </div>
    </div>
  );
};
const sidebarNavItems = [
  {
    id:1,
    label: "Police clearance",
    icon: news1,
    act_io: news1,
    to: "/services",
  },
  {
    id:2,
    label: "Home affairs",
    icon: news2,
    act_io: news2,
   to: "",
  },
  {
    id:3,
    label: "Divorce Order",
    icon: news3,
    act_io: news3,
      to: "",
  },
  {
    id:4,
    label: "Apostille",
    icon: news2,
    act_io: news2,
      to: "",
  },
];
export default ServiceLayout;
