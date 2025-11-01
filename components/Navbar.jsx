"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu, ChevronDown } from "lucide-react";
import Image from "next/image";
import navbarData from "../public/data/navbar.json";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const isActive = (href) =>
    href === "/" ? pathname === href : pathname.startsWith(href); // highlight active routes and subroutes

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 md:px-0">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <Image
              src={navbarData?.logo?.src}
              alt="Logo"
              className="w-24"
              width={96}
              height={96}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navbarData?.links?.map((link, i) =>
              link?.submenu ? (
                <div key={i} className="relative group">
                  <button
                    className={`px-4 py-2 flex items-center gap-2 font-medium transition-all ${
                      isActive(link.href)
                        ? "text-brandblue font-semibold"
                        : "text-gray-600 hover:text-brandblue"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 overflow-hidden">
                    {link?.submenu?.map((item, j) => (
                      <Link
                        key={j}
                        href={item.href}
                        className={`block px-4 py-3 text-sm font-medium border-b last:border-0 border-gray-100 transition-all ${
                          isActive(item.href)
                            ? "text-brandblue bg-gray-50 font-semibold"
                            : "text-gray-600 hover:text-brandblue hover:bg-gray-50"
                        }`}
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
                  className={`px-4 py-2 font-medium transition-all ${
                    isActive(link.href)
                      ? "text-brandblue font-semibold"
                      : "text-gray-600 hover:text-brandblue"
                  }`}
                >
                  {link?.name}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <Link
            href={navbarData?.cta?.href}
            className="hidden lg:block px-6 py-2 font-semibold bg-brandblue text-white rounded-sm hover:bg-brandblue/90 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            {navbarData?.cta?.name}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <Link href="/">
            <Image
              src={navbarData?.logo?.src}
              alt="Logo"
              className="w-16"
              width={64}
              height={64}
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
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
                    className={`w-full text-left px-4 py-3 flex justify-between items-center font-medium rounded-lg transition ${
                      isActive(link.href)
                        ? "text-brandblue bg-gray-50 font-semibold"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === link.name && (
                    <div className="bg-gray-50 rounded-lg ml-4 mt-1">
                      {link.submenu.map((sub, j) => (
                        <Link
                          key={j}
                          href={sub.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block px-4 py-2 font-medium transition ${
                            isActive(sub.href)
                              ? "text-brandblue bg-white font-semibold"
                              : "text-gray-700 hover:text-brandblue"
                          }`}
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
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 font-medium rounded-lg transition ${
                    isActive(link.href)
                      ? "text-brandblue bg-gray-50 font-semibold"
                      : "text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          {/* CTA */}
          <Link
            href={navbarData.cta.href}
            onClick={() => setIsMenuOpen(false)}
            className="block mt-6 px-6 py-3 text-center font-semibold text-white bg-brandblue rounded-lg hover:bg-brandblue/90 transition"
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
