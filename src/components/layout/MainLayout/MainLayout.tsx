import type { FunctionComponent } from "@/common/types";
import { Header } from "../Header";
import { Footer } from "../Footer";
import type { MainLayoutProps } from "./MainLayout.types";
import { Outlet } from "@tanstack/react-router";

export const MainLayout = ({
}: MainLayoutProps): FunctionComponent => {
	return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed inset-0 bg-background bg-grid-pattern bg-[size:6rem_4rem] -z-10" />
      <Header />
        <main className="flex-grow"><Outlet /></main>
      <Footer />
    </div>
  );
};
