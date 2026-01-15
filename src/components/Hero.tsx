import { Button } from "@/components/ui/button";
import { QrCode, Cloud, Smartphone } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient pt-24 pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
              Empowering Global Partners
              <br />
              <span className="text-primary-foreground/90">with Local Payment Precision</span>
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/80 mb-8 max-w-lg" style={{ animationDelay: "0.1s" }}>
              DirectPay Solutions bridges the gap between V5 Pay and the Philippine market. 
              Seamlessly integrate QRPH, bank transfers into your existing workflow.
            </p>
            <div className="flex flex-wrap gap-4" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl">
                View Integration Guide
              </Button>
              <Button variant="heroOutline" size="xl">
                Schedule a Demo
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Phone mockup */}
              <div className="relative bg-card rounded-3xl p-4 shadow-elevated w-64">
                <div className="bg-muted rounded-2xl p-6 flex flex-col items-center">
                  <div className="w-32 h-32 bg-card rounded-xl flex items-center justify-center shadow-card mb-4">
                    <QrCode className="w-24 h-24 text-foreground" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-foreground">Scan to Pay</p>
                    <p className="text-xs text-muted-foreground">QRPH Standard</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-8 bg-card rounded-xl p-3 shadow-elevated animate-float" style={{ animationDelay: "0.5s" }}>
                <Cloud className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-8 bg-card rounded-xl p-3 shadow-elevated animate-float" style={{ animationDelay: "1s" }}>
                <Smartphone className="w-8 h-8 text-primary" />
              </div>

              {/* Connection lines */}
              <svg className="absolute -right-16 top-1/2 w-24 h-24 text-primary-foreground/30" viewBox="0 0 100 100">
                <path d="M0 50 Q50 20 100 50" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                <circle cx="100" cy="50" r="4" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
