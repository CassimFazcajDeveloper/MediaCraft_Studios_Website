import { footerSocialLinks } from "@/data"
import { Heart } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t relative bg-gray-900 border-gray-600 py-16">
    
      <div className="w-[80%] mx-auto relative">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold text-gray-400 dark:text-yellow-300">
            MediaCraft Studios
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {footerSocialLinks.map((link) => {
              const Icon = link.icon; 

              return (
                <a
                  href={link.href}
                  key={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-400 shadow-md flex items-center justify-center dark:text-yellow-300 dark:hover:text-yellow-500  hover:text-blue-500 transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
          <p className="text-sm text-gray-400 flex items-center gap-1 ">
            Made with {" "}
            <Heart className="w:4 h-4 text-destructive fill-destructive text-gray-400" />
            by MediaCraft Creative Studios
          </p>
        </div>
        <div className="mt-8 pt-8 border-t  border-gray-600  dark:border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All Rights Reserved 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
