"use client";

import { useState } from "react";
import Link from "next/link";
import navbarData from "../public/data/navbar.json";
import { X, Menu, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 md:px-0">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div>
            <Link href="/" className="">
              <Image
                src={navbarData?.logo?.src}
                alt=""
                className="w-24"
                width={96}
                height={96}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navbarData?.links?.map((link, i) =>
              link?.submenu ? (
                <div key={i} className="relative group">
                  <button className="px-4 py-2 text-gray-600 flex items-center gap-2 font-medium hover:text-primary">
                    {link?.name}
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-border overflow-hidden">
                    {link?.submenu?.map((item, j) => (
                      <Link
                        key={j}
                        href={item.href}
                        className="block px-4 py-3 text-gray-600 hover:text-primary hover:translate-x-2 transition-smooth border-b last:border-0 border-border"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={i}
                  href={link?.href}
                  className="px-4 py-2 text-gray-600 hover:text-primary transition-smooth font-medium"
                >
                  {link?.name}
                </Link>
              )
            )}
          </div>
          {/* CTA */}
          <div>
            <Link
              href={navbarData?.cta?.href}
              className="hidden lg:block px-6 py-2 font-semibold bg-brandblue text-white rounded-sm  hover:bg-brandblue/90 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              {navbarData?.cta?.name}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-smooth"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-background shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-border">
          <Link href="/">
            <Image
              src={navbarData?.logo?.src}
              alt=""
              className="w-16"
              width={64}
              height={64}
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-muted transition-smooth"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="p-5 space-y-2 overflow-y-auto h-[calc(100%-4rem)]">
          {navbarData.links.map((link, i) => (
            <div key={i}>
              {link.submenu ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className="w-full text-left px-4 py-3 text-foreground hover:bg-muted transition-smooth rounded-lg flex justify-between items-center font-medium"
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === link.name && (
                    <div className="bg-muted rounded-lg ml-4 mt-1">
                      {link.submenu.map((sub, j) => (
                        <Link
                          key={j}
                          href={sub.href}
                          className="block px-4 py-2 text-foreground hover:text-primary transition-smooth font-medium"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-foreground hover:bg-muted transition-smooth rounded-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          {/* CTA */}
          <Link
            href={navbarData.cta.href}
            className="block mt-6 px-6 py-3  rounded-lg font-semibold text-center hover:shadow-lg transition-smooth"
            onClick={() => setIsMenuOpen(false)}
          >
            {navbarData.cta.name}
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}
