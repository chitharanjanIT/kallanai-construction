"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brandLogo">
          <Image src="/logo.png" alt="Kallanai logo" width={34} height={34} />
        </div>
        <div>
          <div className="brandName">Kallanai</div>
          <div className="brandSub">Construction Pvt. Ltd.</div>
        </div>
      </div>

      <nav className="nav">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`navLink ${active ? "active" : ""}`}
            >
              <span>{item.label}</span>
              <span style={{ opacity: 0.55 }}>→</span>
            </Link>
          );
        })}
      </nav>

      <div className="sidebarFooter">
        <div className="helpText">Need a quote?</div>
        <Link className="quoteBtn" href="/quote">
          Get a Quote →
        </Link>
      </div>
    </aside>
  );
}