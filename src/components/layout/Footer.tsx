import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Mail, Twitter, Linkedin, Youtube, Github, MessageSquare, Rss, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  platform: [
    { name: "Overview", href: "/platform/overview" },
    { name: "AI & Analytics", href: "/platform/ai-analytics" },
    { name: "Data Science", href: "/platform/data-science" },
    { name: "MLOps", href: "/platform/mlops" },
    { name: "Data Engineering", href: "/platform/data-engineering" },
  ],
  solutions: [
    { name: "By Industry", href: "/solutions/industry" },
    { name: "By Use Case", href: "/solutions/use-cases" },
    { name: "For Teams", href: "/solutions/teams" },
    { name: "For Enterprises", href: "/solutions/enterprise" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Blog", href: "/blog" },
    { name: "Webinars", href: "/webinars" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Whitepapers", href: "/whitepapers" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Contact", href: "/contact" },
    { name: "Partners", href: "/partners" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Security", href: "/security" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: siteConfig.links.twitter },
  { name: 'LinkedIn', icon: Linkedin, href: siteConfig.links.linkedin },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'GitHub', icon: Github, href: siteConfig.links.github },
  { name: 'Blog', icon: Rss, href: '/blog' },
];

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container px-4 py-12 mx-auto md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo and Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-primary">{siteConfig.name}</span>
            </div>
            <p className="mb-6 text-gray-600">
              The complete AI platform for enterprises to build, deploy, and manage AI applications at scale.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Subscribe to our newsletter
              </h3>
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white border-gray-300 focus:border-primary focus:ring-primary"
                />
                <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                We'll never share your email. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-600 hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-600 hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between pt-4 md:flex-row">
          <div className="flex flex-wrap justify-center space-x-6 md:justify-start">
            {footerLinks.legal.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="text-sm text-gray-500 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center mt-4 space-x-6 md:mt-0">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label={item.name}
              >
                <item.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center md:text-left">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
