import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Unified QRPH - One integration for all banks and wallets",
  "Improved cash flow with T+0 or T+1 settlement options",
  "Local Support - Dedicated Philippine market team",
  "Full BSP compliance (Bangko Sentral ng Pilipinas) regulations",
  "Multi-currency support with competitive FX rates",
  "Real-time transaction monitoring and analytics",
];

const partners = [
  { name: "V5 Pay", color: "bg-primary" },
  { name: "InstaPay", color: "bg-green-500" },
  { name: "MetroBank", color: "bg-red-500" },
  { name: "BPI", color: "bg-red-600" },
  { name: "GCash", color: "bg-blue-500" },
  { name: "Maya", color: "bg-green-600" },
];

const PartnerBenefits = () => {
  return (
    <section id="partnership" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Why Partner With Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Partner Benefits
            </h2>
            <p className="text-muted-foreground mb-8">
              Powering the next generation of fintech in Southeast Asia
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-muted rounded-xl hover:bg-primary/5 transition-colors"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Partners */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                Trusted by Leading Financial Institutions
              </h3>
              
              <div className="grid grid-cols-3 gap-6">
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-muted transition-colors cursor-pointer"
                  >
                    <div className={`w-14 h-14 ${partner.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-lg">
                        {partner.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-foreground">{partner.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="text-center">
                  <p className="text-muted-foreground text-sm mb-4">
                    Join 100+ payment partners in the Philippines
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-primary font-semibold text-sm inline-flex items-center gap-2"
                  >
                    Become a Partner
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBenefits;
