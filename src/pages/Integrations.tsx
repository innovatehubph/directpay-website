import { motion } from "framer-motion";
import { ArrowRight, Check, Smartphone, Building, CreditCard, Globe, QrCode, Wallet, Landmark, ShoppingCart, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Integrations = () => {
  const paymentMethods = [
    {
      category: "QR Payments",
      icon: QrCode,
      items: [
        { name: "QRPH", description: "Philippine QR Payment Standard", status: "live" },
        { name: "QR Ph P2M", description: "Person-to-Merchant QR payments", status: "live" }
      ]
    },
    {
      category: "E-Wallets",
      icon: Wallet,
      items: [
        { name: "GCash", description: "Philippines' leading mobile wallet", status: "live" },
        { name: "Maya", description: "Digital bank and e-wallet", status: "live" },
        { name: "ShopeePay", description: "Shopee's payment solution", status: "coming" },
        { name: "GrabPay", description: "Grab's payment platform", status: "coming" }
      ]
    },
    {
      category: "Bank Transfers",
      icon: Landmark,
      items: [
        { name: "InstaPay", description: "Real-time low-value transfers", status: "live" },
        { name: "PESONet", description: "Same-day batch transfers", status: "live" },
        { name: "Direct Debit", description: "Recurring bank debits", status: "live" }
      ]
    },
    {
      category: "Cards",
      icon: CreditCard,
      items: [
        { name: "Visa", description: "Credit and debit cards", status: "live" },
        { name: "Mastercard", description: "Credit and debit cards", status: "live" },
        { name: "JCB", description: "Japanese credit cards", status: "live" },
        { name: "UnionPay", description: "Chinese credit cards", status: "coming" }
      ]
    }
  ];

  const banks = [
    "BDO", "BPI", "Metrobank", "Security Bank", "UnionBank",
    "RCBC", "PNB", "Chinabank", "EastWest", "Landbank",
    "UCPB", "AUB", "PSBank", "Robinsons Bank"
  ];

  const platforms = [
    {
      name: "Shopify",
      description: "E-commerce platform",
      icon: ShoppingCart,
      status: "Available"
    },
    {
      name: "WooCommerce",
      description: "WordPress e-commerce",
      icon: ShoppingCart,
      status: "Available"
    },
    {
      name: "Magento",
      description: "Enterprise e-commerce",
      icon: ShoppingCart,
      status: "Available"
    },
    {
      name: "Custom API",
      description: "RESTful API integration",
      icon: Code,
      status: "Available"
    },
    {
      name: "Mobile SDK",
      description: "iOS & Android SDKs",
      icon: Smartphone,
      status: "Available"
    },
    {
      name: "Payment Links",
      description: "No-code payment pages",
      icon: Zap,
      status: "Available"
    }
  ];

  const features = [
    {
      title: "Unified Dashboard",
      description: "Manage all payment methods from a single dashboard with real-time analytics and reporting."
    },
    {
      title: "Smart Routing",
      description: "Automatically route transactions to the optimal payment provider for higher success rates."
    },
    {
      title: "Instant Settlement",
      description: "Get your funds faster with same-day or next-day settlement options."
    },
    {
      title: "Fraud Protection",
      description: "AI-powered fraud detection protects your business from unauthorized transactions."
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
            className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6">
              <Globe className="w-4 h-4" />
              Integrations
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              Connect to the
              <br />
              <span className="text-gradient-light">Philippine Payment Ecosystem</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/70 mb-8">
              One integration, all payment methods. Accept QRPH, e-wallets, bank transfers,
              and cards through a single, unified API.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl">
                View Documentation
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Payment Methods
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Support all the ways your customers want to pay
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {paymentMethods.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div>
                        <h4 className="font-medium text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        item.status === 'live'
                          ? 'bg-green-500/10 text-green-600'
                          : 'bg-yellow-500/10 text-yellow-600'
                      }`}>
                        {item.status === 'live' ? 'Live' : 'Coming Soon'}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Banks */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Partner Banks
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Direct connections to major Philippine banks for seamless transfers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {banks.map((bank, index) => (
              <motion.div
                key={bank}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="bg-card px-6 py-3 rounded-lg shadow-card flex items-center gap-2"
              >
                <Building className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">{bank}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-8"
          >
            + 30 more banks through InstaPay and PESONet
          </motion.p>
        </div>
      </section>

      {/* Platform Integrations */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Platform Integrations
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Plug-and-play integrations for popular platforms, or build custom with our API
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <platform.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{platform.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{platform.description}</p>
                <span className="inline-flex items-center gap-1 text-sm text-green-600">
                  <Check className="w-4 h-4" />
                  {platform.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Integrate with DirectPay?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              More than just payment processing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* V5 Pay Partnership */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-8 lg:p-16 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">V5</span>
              </div>
              <span className="text-white/80 text-sm">Powered by V5 Pay</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Global Payment Capabilities
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Through our partnership with V5 Pay, access international payment rails,
              multi-currency support, and cross-border settlement capabilities.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { value: "180+", label: "Countries Supported" },
                { value: "50+", label: "Currencies" },
                { value: "24/7", label: "Settlement" }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Integrate?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Get started with our sandbox environment and have your integration
              up and running in as little as one day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl">
                Get API Keys
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Talk to Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Integrations;
