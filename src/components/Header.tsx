import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">D</span>
              </div>
              <div className="text-primary-foreground">
                <span className="font-bold text-lg">DirectPay</span>
                <span className="text-xs block text-primary-foreground/70 -mt-1">Solutions Inc.</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 text-primary-foreground/70 text-sm">
              <span className="border-l border-primary-foreground/30 pl-4">Powered by</span>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xs">D</span>
                </div>
                <span className="font-semibold text-primary-foreground">V5 Pay</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#solutions" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
              Solutions
            </a>
            <a href="#docs" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
              Integration Docs
            </a>
            <a href="#partnership" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
              Partnership
            </a>
            <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
              Contact Us
            </a>
            <Button variant="nav" size="sm">
              Get API Access
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-primary-foreground/10">
            <div className="flex flex-col gap-4">
              <a href="#solutions" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
                Solutions
              </a>
              <a href="#docs" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
                Integration Docs
              </a>
              <a href="#partnership" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
                Partnership
              </a>
              <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
                Contact Us
              </a>
              <Button variant="nav" size="sm" className="w-fit">
                Get API Access
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
