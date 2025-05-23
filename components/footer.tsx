// components/footer.tsx
import Link from "next/link";
import { LogoToggle } from "./toggle-logo"; // Adjust path if necessary

// Footer link data (adjust as needed)
const footerLinks = {
  product: [
    { title: "Components", href: "/docs/components" }, // Link to your actual components page
    // { title: "Templates", href: "#" },
    // { title: "Categories", href: "#" },
  ],
  social: [
    {
      title: "Twitter",
      href: "https://twitter.com/yourhandle",
      external: true,
    }, // Replace with your actual Twitter link
    {
      title: "Discord",
      href: "https://discord.com/yourserver",
      external: true,
    }, // Replace with your actual Discord link
    { title: "GitHub", href: "https://github.com", external: true }, // Added GitHub
  ],
  company: [
    // { title: "Your UI Pro", href: "/pro" },
    {
      title: "Created by walid memon",
      href: "https://github.com/waleedcj16",
      external: true,
    }, // Example
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background text-gray-500">
      {/* Use theme variables */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Added gap */}
          {/* Left Section */}
          <div className="mb-8 md:mb-0">
            {/* Use the LogoToggle component */}
            <LogoToggle />
            <div className="mt-4 text-sm space-y-1">
              {/* Adjusted margin/spacing */}
              <p>
                Built in public by{" "}
                <a
                  href="https://github.com/waleedcj16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-800  transition-colors underline underline-offset-2"
                >
                  walid memon
                </a>
                .
              </p>
              {/* <p>Building in public at @yourhandle</p> */}
              <p>
                Source code on{" "}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-800   transition-colors underline underline-offset-2"
                >
                  GitHub
                </a>
                .
              </p>
            </div>
          </div>
          {/* Right Section - Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
            {/* Product Links */}
            <div className="space-y-3">
              
              {/* Adjusted spacing */}
              <h4 className="font-semibold text-gray-800   mb-3">
                Product
              </h4>
              {/* Added heading */}
              {footerLinks.product.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block hover:text-gray-800   transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Resources Links */}
            {/* <div className="space-y-3">
              <h4 className="font-semibold text-gray-800   mb-3">Resources</h4>
              {footerLinks.resources.map((link) => (
                <Link key={link.title} href={link.href} className="block hover:text-gray-800   transition-colors">
                  {link.title}
                </Link>
              ))}
            </div> */}

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800   mb-3">Community</h4>
              {footerLinks.social.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-gray-800   transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>

            {/* Company/Pro Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800   mb-3">Project</h4>
              {footerLinks.company.map((link) =>
                link.external ? (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-gray-800   transition-colors"
                  >
                    {link.title}
                  </a>
                ) : (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="block hover:text-gray-800   transition-colors"
                  >
                    {link.title}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
