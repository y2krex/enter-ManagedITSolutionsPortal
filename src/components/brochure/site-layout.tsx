import type { ReactNode } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

/**
 * Scrolls to the hash target when the URL contains one (e.g. `/#services`),
 * otherwise returns to the top on route change.
 */
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export const SiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <ScrollToHash />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
