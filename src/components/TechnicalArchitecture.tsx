import { Code2, Shield, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Code2,
    title: "Developer First",
    description: "RESTful APIs, webhooks, and sandbox environments for rapid integration",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "PCI-DSS 4.0.1 certified infrastructure with enterprise-grade encryption",
  },
  {
    icon: TrendingUp,
    title: "Infinite Scalability",
    description: "Built to handle thousands of transactions per second with auto-scaling",
  },
];

const flowSteps = [
  { label: "V5 Pay System", sublabel: "Global Gateway" },
  { label: "DirectPay API", sublabel: "Bridge Layer" },
  { label: "Local Networks", sublabel: "QRPH / InstaPay" },
];

const TechnicalArchitecture = () => {
  return (
    <section id="docs" className="py-20 lg:py-32 bg-muted relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Architecture
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Technical Architecture
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A robust, scalable infrastructure designed for enterprise performance
          </p>
        </motion.div>

        {/* Flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mb-16 bg-card rounded-2xl p-8 shadow-card border border-border/50"
        >
          {flowSteps.map((step, index) => (
            <div key={index} className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary to-blue-600 text-white px-8 py-4 rounded-xl text-center min-w-[180px] shadow-lg">
                  <div className="font-semibold">{step.label}</div>
                  <div className="text-xs text-white/70 mt-1">{step.sublabel}</div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl -z-10" />
              </motion.div>
              {index < flowSteps.length - 1 && (
                <div className="hidden md:flex items-center mx-4">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex items-center gap-1"
                  >
                    <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-primary/30" />
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>
              )}
              {index < flowSteps.length - 1 && (
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="md:hidden my-2"
                >
                  <ArrowRight className="w-5 h-5 text-primary rotate-90" />
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalArchitecture;
