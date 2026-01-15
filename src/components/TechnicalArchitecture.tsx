import { ArrowRight, Code2, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Developer First",
    description: "RESTful APIs, webhooks, and sandbox environments",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "PCI-DSS compliant infrastructure with multi-layer peak local windows",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Built to handle thousands of transactions per second with peak load handling",
  },
];

const TechnicalArchitecture = () => {
  return (
    <section id="docs" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
          Technical Architecture
        </h2>

        {/* Flow diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12">
          <div className="architecture-box min-w-[160px]">
            V5 Pay System
          </div>
          <ArrowRight className="architecture-arrow hidden md:block" />
          <ArrowRight className="architecture-arrow rotate-90 md:hidden" />
          <div className="architecture-box min-w-[160px]">
            DirectPay API
          </div>
          <ArrowRight className="architecture-arrow hidden md:block" />
          <ArrowRight className="architecture-arrow rotate-90 md:hidden" />
          <div className="architecture-box min-w-[180px]">
            Local Networks
            <span className="block text-xs font-normal opacity-80">(QRPH / InstaPay)</span>
          </div>
        </div>

        {/* Feature bullets */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {feature.title}:
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalArchitecture;
