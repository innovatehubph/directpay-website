import { QrCode, Zap, BarChart3 } from "lucide-react";

const services = [
  {
    icon: QrCode,
    title: "QRPH Unified Standard",
    description: "Accept payments from any Philippine bank or e-wallet (GCash, Maya, etc.) using a single, standardized QR code.",
  },
  {
    icon: Zap,
    title: "V5 Pay Synergy",
    description: "Optimized backend routing designed for V5 Pay partners to ensure high success rates and low latency.",
  },
  {
    icon: BarChart3,
    title: "Settlement & Reporting",
    description: "Real-time transaction monitoring and automated T+1 cycles tailored for enterprise-level scaling.",
  },
];

const ServiceBridge = () => {
  return (
    <section id="solutions" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
          Service Bridge
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-light flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBridge;
