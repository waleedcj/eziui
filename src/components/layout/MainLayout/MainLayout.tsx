import type { FunctionComponent } from "@/common/types";
import { Header } from "../Header";
import { Footer } from "../Footer";
import type { MainLayoutProps } from "./MainLayout.types";


export const MainLayout = ({ children }: MainLayoutProps): FunctionComponent => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Background grid - moved outside the relative container */}
      <div className="fixed inset-0 bg-background bg-grid-pattern bg-[size:6rem_4rem] -z-10" />
      
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}; 