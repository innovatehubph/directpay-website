import { QrCode, Zap, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: QrCode,
    title: "QRPH Unified Standard",
    description: "Accept payments from any Philippine bank or e-wallet (GCash, Maya, etc.) using a single, standardized QR code.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Zap,
    title: "V5 Pay Synergy",
    description: "Optimized backend routing designed for V5 Pay partners to ensure high success rates and low latency.",
    gradient: "from-primary to-blue-400",
  },
  {
    icon: BarChart3,
    title: "Settlement & Reporting",
    description: "Real-time transaction monitoring and automated T+1 cycles tailored for enterprise-level scaling.",
    gradient: "from-indigo-500 to-primary",
  },
];

const ServiceBridge = () => {
  return (
    <section id="solutions" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Service Bridge
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connecting global payment platforms with local Philippine infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 pt-6 border-t border-border/50">
                <a href="#" className="text-primary font-medium text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBridge;
