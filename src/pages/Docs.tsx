import { motion } from "framer-motion";
import { Code, Book, Terminal, Key, Webhook, Shield, Copy, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const Docs = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const quickLinks = [
    { icon: Key, title: "Authentication", description: "Learn how to authenticate API requests", href: "#authentication" },
    { icon: Terminal, title: "Quick Start", description: "Get up and running in 5 minutes", href: "#quickstart" },
    { icon: Webhook, title: "Webhooks", description: "Receive real-time payment notifications", href: "#webhooks" },
    { icon: Shield, title: "Security", description: "Best practices for secure integration", href: "#security" }
  ];

  const endpoints = [
    {
      method: "POST",
      path: "/v1/payments",
      description: "Create a new payment request",
      methodColor: "bg-green-500"
    },
    {
      method: "GET",
      path: "/v1/payments/:id",
      description: "Retrieve payment details",
      methodColor: "bg-blue-500"
    },
    {
      method: "GET",
      path: "/v1/payments",
      description: "List all payments",
      methodColor: "bg-blue-500"
    },
    {
      method: "POST",
      path: "/v1/payments/:id/refund",
      description: "Refund a payment",
      methodColor: "bg-orange-500"
    },
    {
      method: "GET",
      path: "/v1/settlements",
      description: "List settlement reports",
      methodColor: "bg-blue-500"
    },
    {
      method: "POST",
      path: "/v1/webhooks",
      description: "Register webhook endpoint",
      methodColor: "bg-green-500"
    }
  ];

  const codeExamples = {
    curl: `curl -X POST https://api.directpay.ph/v1/payments \\
  -H "Authorization: Bearer sk_live_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 10000,
    "currency": "PHP",
    "payment_method": "qrph",
    "description": "Order #12345",
    "metadata": {
      "order_id": "12345",
      "customer_email": "customer@example.com"
    }
  }'`,
    node: `const DirectPay = require('directpay-node');

const directpay = new DirectPay('sk_live_your_api_key');

const payment = await directpay.payments.create({
  amount: 10000, // Amount in centavos (₱100.00)
  currency: 'PHP',
  payment_method: 'qrph',
  description: 'Order #12345',
  metadata: {
    order_id: '12345',
    customer_email: 'customer@example.com'
  }
});

console.log(payment.id); // pay_abc123...`,
    php: `<?php
require 'vendor/autoload.php';

$directpay = new \\DirectPay\\Client('sk_live_your_api_key');

$payment = $directpay->payments->create([
    'amount' => 10000, // Amount in centavos (₱100.00)
    'currency' => 'PHP',
    'payment_method' => 'qrph',
    'description' => 'Order #12345',
    'metadata' => [
        'order_id' => '12345',
        'customer_email' => 'customer@example.com'
    ]
]);

echo $payment->id; // pay_abc123...`,
    python: `import directpay

directpay.api_key = 'sk_live_your_api_key'

payment = directpay.Payment.create(
    amount=10000,  # Amount in centavos (₱100.00)
    currency='PHP',
    payment_method='qrph',
    description='Order #12345',
    metadata={
        'order_id': '12345',
        'customer_email': 'customer@example.com'
    }
)

print(payment.id)  # pay_abc123...`
  };

  const webhookExample = `{
  "id": "evt_abc123",
  "type": "payment.completed",
  "created": 1703123456,
  "data": {
    "object": {
      "id": "pay_xyz789",
      "amount": 10000,
      "currency": "PHP",
      "status": "completed",
      "payment_method": "qrph",
      "metadata": {
        "order_id": "12345"
      }
    }
  }
}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-10 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6">
              <Book className="w-4 h-4" />
              API Documentation
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              Build Powerful
              <br />
              <span className="text-gradient-light">Payment Integrations</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/70 mb-8 max-w-2xl">
              Everything you need to integrate DirectPay into your application.
              RESTful APIs, comprehensive SDKs, and detailed guides.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                <Terminal className="w-4 h-4" />
                Get API Keys
              </Button>
              <Button variant="heroOutline" size="xl">
                <ExternalLink className="w-4 h-4" />
                View Full Docs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <motion.a
                key={link.title}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{link.title}</h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section id="quickstart" className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Quick Start</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Create your first payment in under 5 minutes with our simple API.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl shadow-card overflow-hidden"
          >
            <Tabs defaultValue="curl" className="w-full">
              <div className="border-b border-border px-4">
                <TabsList className="bg-transparent h-14">
                  <TabsTrigger value="curl" className="data-[state=active]:bg-muted">cURL</TabsTrigger>
                  <TabsTrigger value="node" className="data-[state=active]:bg-muted">Node.js</TabsTrigger>
                  <TabsTrigger value="php" className="data-[state=active]:bg-muted">PHP</TabsTrigger>
                  <TabsTrigger value="python" className="data-[state=active]:bg-muted">Python</TabsTrigger>
                </TabsList>
              </div>

              {Object.entries(codeExamples).map(([key, code]) => (
                <TabsContent key={key} value={key} className="m-0">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                      onClick={() => copyToClipboard(code, key)}
                    >
                      {copiedCode === key ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                    <pre className="p-6 overflow-x-auto text-sm">
                      <code className="text-muted-foreground">{code}</code>
                    </pre>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Authentication */}
      <section id="authentication" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Authentication</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Authenticate your API requests using Bearer tokens. Include your API key in the Authorization header of every request.
              </p>

              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Key className="w-4 h-4 text-primary" />
                    Test Mode
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Use keys starting with <code className="bg-muted px-2 py-0.5 rounded">sk_test_</code> for development.
                    No real transactions are processed.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    Live Mode
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Use keys starting with <code className="bg-muted px-2 py-0.5 rounded">sk_live_</code> for production.
                    Real transactions will be processed.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-navy rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/60 text-sm">Authorization Header</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/60 hover:text-white"
                  onClick={() => copyToClipboard('Authorization: Bearer sk_live_your_api_key', 'auth')}
                >
                  {copiedCode === 'auth' ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>Authorization: Bearer sk_live_your_api_key</code>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">API Endpoints</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Core endpoints for managing payments and settlements.
            </p>
          </motion.div>

          <div className="space-y-3">
            {endpoints.map((endpoint, index) => (
              <motion.div
                key={endpoint.path}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-lg p-4 shadow-card flex items-center gap-4 hover:shadow-elevated transition-all duration-300 cursor-pointer group"
              >
                <span className={`${endpoint.methodColor} text-white text-xs font-bold px-3 py-1 rounded shrink-0`}>
                  {endpoint.method}
                </span>
                <code className="text-foreground font-mono text-sm">{endpoint.path}</code>
                <span className="text-muted-foreground text-sm hidden md:block ml-auto">
                  {endpoint.description}
                </span>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webhooks */}
      <section id="webhooks" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Webhooks</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Receive real-time notifications when events occur in your DirectPay account.
                Set up webhook endpoints to automate your payment workflows.
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Available Events</h4>
                {[
                  "payment.created",
                  "payment.completed",
                  "payment.failed",
                  "payment.refunded",
                  "settlement.completed"
                ].map((event) => (
                  <div key={event} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <code className="text-sm text-muted-foreground">{event}</code>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-navy rounded-xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <span className="text-white/60 text-sm">Webhook Payload Example</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/60 hover:text-white"
                  onClick={() => copyToClipboard(webhookExample, 'webhook')}
                >
                  {copiedCode === 'webhook' ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <pre className="p-6 overflow-x-auto text-sm">
                <code className="text-green-400">{webhookExample}</code>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Official SDKs</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Use our official libraries to integrate DirectPay in your preferred language.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Node.js", package: "npm install directpay-node", icon: "JS" },
              { name: "PHP", package: "composer require directpay/php-sdk", icon: "PHP" },
              { name: "Python", package: "pip install directpay", icon: "PY" },
              { name: "Ruby", package: "gem install directpay", icon: "RB" }
            ].map((sdk, index) => (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card"
              >
                <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">{sdk.icon}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{sdk.name}</h3>
                <code className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded block overflow-x-auto">
                  {sdk.package}
                </code>
              </motion.div>
            ))}
          </div>
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
              Ready to Start Building?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Get your API keys and start accepting payments in minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl">
                Get API Keys
              </Button>
              <Button variant="heroOutline" size="xl">
                View Full Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Docs;
