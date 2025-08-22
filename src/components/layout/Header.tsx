"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search, ArrowRight, BarChart, LayoutGrid, Database, Cpu, Building2, BookOpen, DollarSign, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const mainNavItems = [
  {
    title: "Platform",
    href: "/platform",
    icon: <LayoutGrid className="h-4 w-4 mr-2" />,
    subItems: [
      { 
        title: "Overview", 
        href: "/platform/overview",
        description: "End-to-end AI platform for all your data needs",
        icon: <LayoutGrid className="h-4 w-4 mr-2 text-blue-500" />
      },
      { 
        title: "AI & Analytics", 
        href: "/platform/ai-analytics",
        description: "Advanced analytics and AI capabilities",
        icon: <Cpu className="h-4 w-4 mr-2 text-purple-500" />
      },
      { 
        title: "Data Science", 
        href: "/platform/data-science",
        description: "Tools for data scientists and analysts",
        icon: <BarChart className="h-4 w-4 mr-2 text-green-500" />
      },
      { 
        title: "MLOps", 
        href: "/platform/mlops",
        description: "Operationalize your machine learning models",
        icon: <Database className="h-4 w-4 mr-2 text-orange-500" />
      },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
    icon: <BarChart className="h-4 w-4 mr-2" />,
    subItems: [
      { 
        title: "By Industry", 
        href: "/solutions/industry",
        description: "Tailored solutions for your industry",
        icon: <Building2 className="h-4 w-4 mr-2 text-blue-500" />
      },
      { 
        title: "By Use Case", 
        href: "/solutions/use-cases",
        description: "Solutions for specific business challenges",
        icon: <MessageSquare className="h-4 w-4 mr-2 text-purple-500" />
      },
    ],
  },
  { 
    title: "Resources", 
    href: "/resources",
    icon: <BookOpen className="h-4 w-4 mr-2" />
  },
  { 
    title: "Company", 
    href: "/company",
    icon: <Building2 className="h-4 w-4 mr-2" />
  },
  { 
    title: "Pricing", 
    href: "/pricing",
    icon: <DollarSign className="h-4 w-4 mr-2" />
  },
];

const ctaItems = [
  { 
    title: "Contact Sales", 
    href: "/contact-sales", 
    variant: "outline" as const,
    icon: <MessageSquare className="h-4 w-4 mr-2" />
  },
  { 
    title: "Get Started", 
    href: "/get-started", 
    variant: "default" as const,
    icon: <ArrowRight className="h-4 w-4 mr-2" />
  },
];

const DropdownItem = ({ item, onClick }: { item: any, onClick?: () => void }) => (
  <Link
    href={item.href}
    onClick={onClick}
    className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors group"
  >
    <div className="flex-shrink-0">
      {item.icon || <LayoutGrid className="h-5 w-5 text-gray-400 group-hover:text-primary" />}
    </div>
    <div className="ml-3">
      <p className="text-sm font-medium text-gray-900 group-hover:text-primary">{item.title}</p>
      {item.description && (
        <p className="mt-1 text-xs text-gray-500">{item.description}</p>
      )}
    </div>
  </Link>
);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
    setIsSearchOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/90 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map((item) => (
              <div key={item.href} className="relative">
                <button
                  onMouseEnter={() => item.subItems && setOpenSubmenu(item.href)}
                  onFocus={() => item.subItems && setOpenSubmenu(item.href)}
                  onClick={() => item.subItems && setOpenSubmenu(openSubmenu === item.href ? null : item.href)}
                  className={cn(
                    "flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-primary rounded-lg transition-colors",
                    openSubmenu === item.href && "text-primary bg-gray-50"
                  )}
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.title}
                  {item.subItems && (
                    <ChevronDown className={cn(
                      "ml-1 h-4 w-4 transition-transform",
                      openSubmenu === item.href ? "rotate-180" : ""
                    )} />
                  )}
                </button>

                {/* Desktop Dropdown */}
                {item.subItems && (
                  <AnimatePresence>
                    {openSubmenu === item.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        onMouseLeave={() => setOpenSubmenu(null)}
                        className="absolute left-0 mt-1 w-80 rounded-xl bg-white shadow-xl ring-1 ring-black/5 p-2"
                      >
                        {item.subItems.map((subItem) => (
                          <DropdownItem key={subItem.href} item={subItem} />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-500 hover:text-primary transition-colors rounded-lg hover:bg-gray-50"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {ctaItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: item.variant, size: "sm" }),
                    "px-4 py-2 text-sm font-medium flex items-center"
                  )}
                >
                  {item.icon}
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-500 hover:text-primary mr-2 lg:hidden"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-500 hover:text-primary lg:hidden"
              aria-label="Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white border-t"
          >
            <div className="px-4 py-3 space-y-1">
              {mainNavItems.map((item) => (
                <div key={item.href} className="border-b border-gray-100">
                  <button
                    onClick={() => setOpenSubmenu(openSubmenu === item.href ? null : item.href)}
                    className="w-full flex justify-between items-center py-3 px-2 text-base font-medium text-gray-700 hover:text-primary"
                  >
                    <div className="flex items-center">
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      {item.title}
                    </div>
                    {item.subItems && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openSubmenu === item.href ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>
                  {item.subItems && openSubmenu === item.href && (
                    <div className="pl-6 pb-2 space-y-1">
                      {item.subItems.map((subItem) => (
                        <DropdownItem 
                          key={subItem.href} 
                          item={subItem} 
                          onClick={closeAllMenus}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-2 pb-4 space-y-2">
                {ctaItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeAllMenus}
                    className={cn(
                      buttonVariants({ variant: item.variant, size: "sm" }),
                      "w-full justify-center py-3 text-sm font-medium flex items-center"
                    )}
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-50">
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative max-w-2xl mx-auto mt-20 bg-white rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-4 pl-12 pr-4 text-lg border-0 focus:ring-0 focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}