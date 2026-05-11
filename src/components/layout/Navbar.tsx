import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "خدماتنا", path: "/services" },
    { name: "أعمالنا", path: "/portfolio" },
    { name: "عن الشركة", path: "/about" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border" dir="rtl">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-xl">
            <Code2 className="text-primary-foreground h-6 w-6" />
          </div>
          <span className="text-2xl font-bold tracking-tighter">أفق التقنية</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="text-muted-foreground hover:text-primary transition-colors font-medium">
              {link.name}
            </Link>
          ))}
          <Button asChild>
            <Link to="/contact">ابدأ مشروعك</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 w-full bg-background border-b border-border p-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-lg font-medium p-2">
                {link.name}
              </Link>
            ))}
            <Button className="w-full" asChild>
              <Link to="/contact">ابدأ مشروعك</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
