
"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Avatars from "./avater";

const SidebarNav = ({ items }: { items: { id: number; label: string; icon: any }[] }) => {
  const [activeId, setActiveId] = useState(1); 
  const router = useRouter()
const handleNavigate = () =>{
  router.push('/services')
}
  return (
    <>
      {/* Mobile Dropdown */}
      <div className="lg:hidden mb-4">
        <Select value={activeId.toString()} onValueChange={(v) => setActiveId(Number(v))}>
          <SelectTrigger className="w-full h-12">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {items?.map((item,index) => (
              <SelectItem
               key={item.id} value={item.id.toString()}
                 onClick={() => {
                setActiveId(index+1);
                handleNavigate()
              }}
               >
                <div className="flex items-center gap-3">
                  <Avatars src={item.icon} alt={item.label} />
                  <span>{item.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Desktop Sidebar */}
      <ScrollArea className="hidden lg:block h-fit shrink-0">
        <nav className="flex flex-col gap-2 p-4 bg-white border rounded-xl lg:flex-col">
          {items?.map((item,index) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveId(index+1);
                handleNavigate()
              }}
              className={`cursor-pointer flex items-center space-x-1 py-1 hover:bg-figma-deletepy-1.5 px-4 mr-6 rounded-full
                ${activeId === index+1
                  ? "bg-secondary font-medium" 
                  : "hover:bg-gray-100"
                }`}
            >
              <Avatars src={item.icon} alt={item.label} className="w-8 h-8" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </ScrollArea>

      {/* Pass active service to parent */}
      <ServiceContext.Provider value={{ activeId, setActiveId }}>
        {null}
      </ServiceContext.Provider>
    </>
  );
};


import { createContext } from "react";
import { useRouter } from "next/navigation";
export const ServiceContext = createContext<{
  activeId: number;
  setActiveId: (id: number) => void;
}>({ activeId: 1, setActiveId: () => {} });

export default SidebarNav;