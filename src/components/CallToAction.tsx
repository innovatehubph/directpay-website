import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <MessageSquare className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to go live in the Philippines?
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
            Start accepting payments from millions of Filipino customers today.
            Get started in minutes with our simple API integration.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="group min-w-[200px]">
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="min-w-[200px]">
              View Documentation
            </Button>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8"
          >
            {["PCI-DSS Certified", "BSP Licensed", "24/7 Support"].map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-white/60">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
