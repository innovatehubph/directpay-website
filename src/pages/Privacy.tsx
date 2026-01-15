import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      title: "1. Information We Collect",
      content: `We collect information you provide directly to us, such as when you create an account, make a transaction, contact us, or otherwise communicate with us. This information may include:

• **Personal Information:** Name, email address, phone number, mailing address
• **Business Information:** Company name, business registration details, tax identification numbers
• **Financial Information:** Bank account details, payment card information (processed securely through our payment partners)
• **Transaction Data:** Payment history, transaction amounts, merchant details
• **Technical Data:** IP address, device information, browser type, access times`
    },
    {
      title: "2. How We Use Your Information",
      content: `We use the information we collect to:

• Process and complete transactions
• Provide, maintain, and improve our services
• Send you technical notices, updates, and support messages
• Respond to your comments, questions, and customer service requests
• Communicate with you about products, services, offers, and events
• Monitor and analyze trends, usage, and activities
• Detect, investigate, and prevent fraudulent transactions and other illegal activities
• Comply with legal obligations and regulatory requirements`
    },
    {
      title: "3. Information Sharing",
      content: `We may share your information in the following circumstances:

• **With Service Providers:** We share information with third-party vendors who provide services such as payment processing, data analysis, and customer service
• **With Business Partners:** We may share information with our business partners, including V5 Pay, for transaction processing
• **For Legal Reasons:** We may disclose information if required by law, regulation, or legal process
• **With Your Consent:** We may share information with your consent or at your direction
• **Business Transfers:** In connection with any merger, sale of company assets, or acquisition`
    },
    {
      title: "4. Data Security",
      content: `We implement appropriate technical and organizational measures to protect your personal information, including:

• PCI-DSS compliant payment processing
• Encryption of data in transit and at rest
• Regular security assessments and penetration testing
• Access controls and authentication requirements
• Employee training on data protection

While we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security of your data.`
    },
    {
      title: "5. Data Retention",
      content: `We retain your personal information for as long as necessary to:

• Provide our services to you
• Comply with legal and regulatory requirements
• Resolve disputes and enforce our agreements

Transaction records are retained for a minimum of 7 years as required by Philippine regulations. You may request deletion of your account, subject to our legal retention obligations.`
    },
    {
      title: "6. Your Rights",
      content: `Under the Philippine Data Privacy Act of 2012, you have the right to:

• **Access:** Request access to your personal data
• **Correction:** Request correction of inaccurate or incomplete data
• **Erasure:** Request deletion of your data, subject to legal requirements
• **Object:** Object to processing of your data for certain purposes
• **Portability:** Receive your data in a structured, machine-readable format
• **Withdraw Consent:** Withdraw consent for processing where applicable

To exercise these rights, contact our Data Protection Officer at privacy@directpay.ph`
    },
    {
      title: "7. Cookies and Tracking",
      content: `We use cookies and similar tracking technologies to:

• Remember your preferences and settings
• Understand how you use our services
• Provide personalized content and advertisements
• Analyze and improve our services

You can control cookies through your browser settings. Note that disabling cookies may affect the functionality of our services.`
    },
    {
      title: "8. International Data Transfers",
      content: `Your information may be transferred to and processed in countries other than the Philippines, including countries where V5 Pay operates. We ensure appropriate safeguards are in place for international transfers, including:

• Standard contractual clauses approved by regulatory authorities
• Adequacy decisions by the National Privacy Commission
• Binding corporate rules where applicable`
    },
    {
      title: "9. Children's Privacy",
      content: `Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete such information.`
    },
    {
      title: "10. Changes to This Policy",
      content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.`
    },
    {
      title: "11. Contact Us",
      content: `If you have questions about this Privacy Policy or our data practices, please contact us:

**Data Protection Officer**
DirectPay Solutions Inc.
Email: privacy@directpay.ph
Phone: +63 (2) 8888-1234
Address: BGC, Taguig City, Philippines

For complaints, you may also contact the National Privacy Commission at complaints@privacy.gov.ph`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-white/70">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-muted-foreground text-lg mb-8">
                DirectPay Solutions Inc. ("DirectPay," "we," "us," or "our") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                use our payment services and website.
              </p>

              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="mb-10"
                >
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                  <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
