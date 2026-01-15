import { motion } from "framer-motion";
import { Check, HelpCircle, ArrowRight, Zap, Building2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      icon: Zap,
      price: "1.5%",
      priceLabel: "per transaction",
      minFee: "₱10 minimum fee",
      features: [
        "QRPH payments",
        "Bank transfers (InstaPay)",
        "Basic API access",
        "Email support",
        "Standard settlement (T+1)",
        "Basic analytics dashboard",
        "Up to ₱500K monthly volume"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Business",
      description: "For growing businesses with higher volume",
      icon: Building2,
      price: "1.2%",
      priceLabel: "per transaction",
      minFee: "₱8 minimum fee",
      features: [
        "All Starter features",
        "Multi-wallet support (GCash, Maya)",
        "Advanced API access",
        "Priority email & chat support",
        "Fast settlement (T+0 available)",
        "Advanced analytics & reports",
        "Up to ₱5M monthly volume",
        "Webhook notifications",
        "Sandbox environment"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      icon: Rocket,
      price: "Custom",
      priceLabel: "volume-based pricing",
      minFee: "Contact for details",
      features: [
        "All Business features",
        "Custom integration support",
        "Dedicated account manager",
        "24/7 phone & chat support",
        "Real-time settlement",
        "Custom reporting & BI tools",
        "Unlimited monthly volume",
        "SLA guarantees (99.99%)",
        "On-premise deployment option",
        "White-label solutions"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const paymentMethods = [
    { method: "QRPH", starter: "1.5%", business: "1.2%", enterprise: "Custom" },
    { method: "InstaPay", starter: "₱15 flat", business: "₱12 flat", enterprise: "Custom" },
    { method: "PESONet", starter: "₱25 flat", business: "₱20 flat", enterprise: "Custom" },
    { method: "GCash", starter: "2.0%", business: "1.8%", enterprise: "Custom" },
    { method: "Maya", starter: "2.0%", business: "1.8%", enterprise: "Custom" },
    { method: "Credit/Debit Card", starter: "2.5%", business: "2.2%", enterprise: "Custom" }
  ];

  const faqs = [
    {
      question: "What is the settlement timeline?",
      answer: "Starter plans receive T+1 settlement (next business day). Business plans can opt for T+0 (same day) settlement for an additional 0.1% fee. Enterprise clients get real-time settlement options."
    },
    {
      question: "Are there any setup fees?",
      answer: "No setup fees for Starter and Business plans. Enterprise solutions may have one-time integration fees depending on customization requirements."
    },
    {
      question: "Can I upgrade my plan anytime?",
      answer: "Yes, you can upgrade your plan at any time. The new rates will apply to transactions from the next billing cycle. Downgrades take effect at the end of your current billing period."
    },
    {
      question: "What happens if I exceed my monthly volume?",
      answer: "If you exceed your plan's monthly volume, we'll automatically apply the next tier's rates for the excess amount. We'll also reach out to discuss upgrading your plan."
    },
    {
      question: "Is there a free trial?",
      answer: "Business plan comes with a 14-day free trial. You can process up to ₱50,000 in test transactions with no fees during the trial period."
    },
    {
      question: "What currencies do you support?",
      answer: "We primarily support PHP (Philippine Peso) for local transactions. For cross-border payments, we support USD, EUR, SGD, and other major currencies through our V5 Pay integration."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6">
              Simple, Transparent Pricing
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              Pay Only for What
              <br />
              <span className="text-gradient-light">You Use</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/70">
              No hidden fees. No surprises. Just straightforward pricing that scales with your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-32 -mt-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-primary lg:scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <plan.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.priceLabel}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{plan.minFee}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Pricing Table */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Payment Method Rates
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Detailed breakdown of fees by payment method
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl shadow-card overflow-hidden max-w-4xl mx-auto"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-4 font-semibold text-foreground">Payment Method</th>
                    <th className="text-center p-4 font-semibold text-foreground">Starter</th>
                    <th className="text-center p-4 font-semibold text-foreground">Business</th>
                    <th className="text-center p-4 font-semibold text-foreground">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentMethods.map((row, index) => (
                    <tr key={row.method} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                      <td className="p-4 font-medium text-foreground">{row.method}</td>
                      <td className="p-4 text-center text-muted-foreground">{row.starter}</td>
                      <td className="p-4 text-center text-muted-foreground">{row.business}</td>
                      <td className="p-4 text-center text-muted-foreground">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to know about our pricing
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-xl p-6 shadow-card"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Join thousands of businesses already using DirectPay Solutions for their payment needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
