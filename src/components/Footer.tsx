import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/70 text-sm text-center md:text-left">
            © 2026 DirectPay Solutions Inc. Licensed Payment System Provider.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
              Documentation
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
              Terms of Service
            </a>
            <a href="mailto:contact@directpay.ph" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
