import type React from "react";
import { createContext, useContext } from "react";
import { Link, type LinkProps } from "@tanstack/react-router";
import type { Links, SidebarContextProps } from "./SideBar.types";

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <SidebarContext.Provider value={{ open: true }}>{children}</SidebarContext.Provider>;
};

export const Sidebar = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};

export const SidebarBody = (props: React.ComponentProps<"div">) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...props} />
    </>
  );
};

export const DesktopSidebar = ({ className, children, ...props }: React.ComponentProps<"div">) => {
  return (
    <div className="h-full" {...props}>
      {children}
    </div>
  );
};

export const MobileSidebar = ({ className, children, ...props }: React.ComponentProps<"div">) => {
  return (
    <div className="md:hidden bg-neutral-900 p-10 z-[100] flex flex-col justify-between overflow-y-auto" {...props}>
      {children}
    </div>
  );
};

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
  props?: LinkProps;
}) => {
  return (
    <Link 
      to={link.href} 
      className="flex items-center justify-start gap-2 group/sidebar py-2 hover:translate-x-1 transition text-gray-500 hover:text-[#FF851B]  duration-200" 
      {...props}
    >
      {link.icon}
      <span className="text-base whitespace-pre inline-block">
        {link.label}
      </span>
    </Link>
  );
};