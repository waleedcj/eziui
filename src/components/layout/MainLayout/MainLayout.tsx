import type { FunctionComponent } from "@/common/types";
import { Header } from "../Header";
import { Footer } from "../Footer";
import type { MainLayoutProps } from "./MainLayout.types";


export const MainLayout = ({ children }: MainLayoutProps): FunctionComponent => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}; 