import React, { useState } from "react";
import SidebarContent from "./sidebar-content";
import BlogSidebar from "@/components/Navbar/sidebar-home";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  Home,
  UserRound,
  Wrench,
  Paperclip,
  Brain,
  NotebookPen,
  Contact,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

type Props = {
  currentPage?: string;
};

const Sidebar = ({ currentPage = "welcome" }: Props) => {
  return (
    <div className="flex">
      <div className="md:block hidden">
        <SidebarContent currentPage={currentPage} />
      </div>
      {/* <div className="flex flex-row items-start md:hidden">
        <SidebarContent content={currentPage} />
        <button>{`>`}</button>
      </div> */}
      <div className="flex flex-row items-start md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="left-0 fixed bg-slate-300 opacity-45 py-3 rounded-r-xl">
              <ChevronRight />
            </button>
          </SheetTrigger>
          <SheetContent side={"left"} className="px-0 max-w-[300px]">
            <div className="flex flex-col mt-2 w-full">
              <SidebarContent
                currentPage={currentPage}
                styleTW="h-[calc(100vh-56px)]"
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Sidebar;
