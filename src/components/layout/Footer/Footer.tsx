import type { FunctionComponent } from "@/common/types";
import { useContext } from "react";
import { ThemeContext, ThemeContextInterface } from "@/context/ThemeContext";
import { Link } from "@tanstack/react-router";
import BrandLogo from "@/assets/images/png/logo-dark.png"
import BrandLogoLight from "@/assets/images/png/logo-light.png"

export const Footer = (): FunctionComponent => {
  const { darkTheme } = useContext(ThemeContext) as ThemeContextInterface;
  return (
    <footer className="border-t border-gray-100 bg-background  text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="mb-8 md:mb-0">
          <Link to="/" className="">
						<img 
						src={darkTheme ? BrandLogo : BrandLogoLight} 
							alt="Brand Logo" 
							className="h-10 w-auto"
						/>
					</Link>
            {/* <Link to="/" className="text-xl font-bold text-white">
              Logo
            </Link> */}
            <div className="mt-2 text-sm">
              <p>A product by Your Company</p>
              <p>Building in public at @yourhandle</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Product Links */}
            <div className="space-y-4">
              {/* <Link to="/pricing" className="block text-sm hover:text-white transition-colors">
                Pricing
              </Link> */}
              <Link to="/components" className="block text-sm hover:text-white transition-colors">
                Components
              </Link>
              {/* <Link to="/components" className="block text-sm hover:text-white transition-colors">
                Templates
              </Link>
              <Link to="/components" className="block text-sm hover:text-white transition-colors">
                Categories
              </Link> */}
            </div>

            {/* Resources Links */}
            <div className="space-y-4">
              {/* <Link to="/blog" className="block text-sm hover:text-white transition-colors">
                Blog
              </Link>
              <Link to="/box-shadows" className="block text-sm hover:text-white transition-colors">
                Box Shadows
              </Link>
              <Link to="/showcase" className="block text-sm hover:text-white transition-colors">
                Showcase
              </Link> */}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="block text-sm hover:text-white transition-colors">
                Twitter
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer"
                className="block text-sm hover:text-white transition-colors">
                Discord
              </a>
            </div>

            {/* Pro Links */}
            <div className="space-y-4">
              {/* <Link to="/pro" className="block text-sm hover:text-white transition-colors">
                Your UI Pro
              </Link> */}
              <Link to="/" className="block text-sm hover:text-white transition-colors">
                Your Company
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};