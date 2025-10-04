'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/research", label: "Research" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
    { href: "/login", label: "" },
  ];

  return (
    <header
      className="bg-white/90 backdrop-blur-md border-b shadow-sm sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Branding / Logo */}
        <Link
          href="/"
          className="inline-flex items-center transition-opacity hover:opacity-80"
          aria-label="Go to homepage"
          aria-current={pathname === "/" ? "page" : undefined}
        >
          <Image
            src="/logo.png"
            alt="Aime Serge Tech Brand"
            width={52}
            height={52}
            className="rounded-full"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-8 text-sm font-medium"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative transition-colors pb-1 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                {/* Animated underline (only for nav links) */}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-blue-600 rounded transition-all duration-300 ease-in-out ${
                    isActive
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t shadow-md px-6 py-4 space-y-3"
          role="dialog"
          aria-label="Mobile menu"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={toggleMenu}
                className={`group relative block transition-colors py-1 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                {/* Animated underline (only for nav links) */}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-blue-600 rounded transition-all duration-300 ease-in-out ${
                    isActive
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
