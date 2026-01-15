import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing or using DirectPay's services, website, or API (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our Services.

These Terms constitute a legally binding agreement between you and DirectPay Solutions Inc. ("DirectPay," "we," "us," or "our"). If you are using our Services on behalf of a business, you represent that you have the authority to bind that business to these Terms.`
    },
    {
      title: "2. Description of Services",
      content: `DirectPay provides payment processing services that enable merchants and businesses to accept various payment methods including:

• QR Ph (QRPH) payments
• Bank transfers via InstaPay and PESONet
• E-wallet payments (GCash, Maya)
• Credit and debit card payments
• Cross-border payment processing through V5 Pay

Our Services include payment gateway integration, transaction processing, settlement services, and related tools and APIs.`
    },
    {
      title: "3. Account Registration",
      content: `To use our Services, you must:

• Create an account and provide accurate, complete information
• Maintain the security of your account credentials
• Promptly update any changes to your information
• Be at least 18 years old or the legal age in your jurisdiction
• Have the legal capacity to enter into binding agreements

You are responsible for all activities that occur under your account. Notify us immediately of any unauthorized access or use of your account.`
    },
    {
      title: "4. Merchant Obligations",
      content: `As a merchant using our Services, you agree to:

• Comply with all applicable laws and regulations, including BSP regulations
• Maintain valid business registration and required licenses
• Provide accurate product/service descriptions to customers
• Honor refund and cancellation policies as required by law
• Not use our Services for prohibited activities (see Section 6)
• Maintain adequate customer support for your customers
• Implement reasonable security measures to protect customer data
• Display required disclosures and payment logos as specified`
    },
    {
      title: "5. Fees and Payment",
      content: `• **Transaction Fees:** You agree to pay the fees for each transaction as specified in your service agreement or our published pricing
• **Settlement:** Funds will be settled according to your selected settlement schedule (T+0, T+1, or as agreed)
• **Reserves:** We may hold a reserve from your settlements to cover potential chargebacks or disputes
• **Currency:** All fees are in Philippine Pesos unless otherwise specified
• **Changes:** We may modify our fees with 30 days' notice
• **Taxes:** You are responsible for any applicable taxes on your transactions`
    },
    {
      title: "6. Prohibited Activities",
      content: `You may not use our Services for:

• Illegal goods or services
• Adult content or services (unless specifically approved)
• Gambling (unless properly licensed)
• Controlled substances or drug paraphernalia
• Weapons, ammunition, or explosives
• Counterfeit or stolen goods
• Money laundering or terrorist financing
• Fraudulent or deceptive practices
• Pyramid schemes or multi-level marketing
• Activities that violate intellectual property rights
• Any activity prohibited by card network rules

We reserve the right to suspend or terminate accounts engaged in prohibited activities.`
    },
    {
      title: "7. Chargebacks and Disputes",
      content: `• **Responsibility:** You are responsible for all chargebacks and disputes related to your transactions
• **Fees:** Chargeback fees will be assessed as specified in your service agreement
• **Documentation:** You must provide requested documentation within specified timeframes
• **Excessive Chargebacks:** High chargeback rates may result in increased reserves, fee adjustments, or account termination
• **Final Decisions:** Card network decisions on disputes are final`
    },
    {
      title: "8. Data and Privacy",
      content: `• Your use of our Services is subject to our Privacy Policy
• You must comply with applicable data protection laws (including the Philippine Data Privacy Act)
• You may only use customer data for transaction-related purposes
• You must maintain PCI-DSS compliance if handling card data directly
• We may use anonymized transaction data for analytics and service improvement`
    },
    {
      title: "9. Intellectual Property",
      content: `• DirectPay and our logos, trademarks, and service marks are our property
• Our API, documentation, and software are protected by intellectual property laws
• You may use our marks only as permitted in our brand guidelines
• You retain ownership of your content and data
• You grant us a license to use your data as necessary to provide the Services`
    },
    {
      title: "10. Limitation of Liability",
      content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW:

• Our total liability is limited to the fees you paid in the 12 months preceding the claim
• We are not liable for indirect, incidental, special, or consequential damages
• We are not liable for lost profits, data loss, or business interruption
• We are not responsible for third-party services or content
• Force majeure events excuse our performance obligations

These limitations apply regardless of the legal theory and even if we were advised of the possibility of such damages.`
    },
    {
      title: "11. Indemnification",
      content: `You agree to indemnify, defend, and hold harmless DirectPay and our officers, directors, employees, and agents from any claims, damages, losses, and expenses (including legal fees) arising from:

• Your use of our Services
• Your violation of these Terms
• Your violation of any law or regulation
• Your infringement of third-party rights
• Disputes between you and your customers`
    },
    {
      title: "12. Termination",
      content: `• **By You:** You may terminate your account at any time by contacting us
• **By Us:** We may suspend or terminate your account for violation of these Terms, excessive chargebacks, suspected fraud, or at our discretion with notice
• **Effect:** Upon termination, we will settle any pending funds (minus applicable holds) and you must cease using our Services
• **Survival:** Provisions regarding liability, indemnification, and dispute resolution survive termination`
    },
    {
      title: "13. Dispute Resolution",
      content: `• **Governing Law:** These Terms are governed by Philippine law
• **Arbitration:** Disputes shall be resolved through binding arbitration in Makati City under Philippine Dispute Resolution Center rules
• **Class Action Waiver:** You waive the right to participate in class actions
• **Exceptions:** Either party may seek injunctive relief in court for intellectual property violations`
    },
    {
      title: "14. Changes to Terms",
      content: `We may modify these Terms at any time. We will provide notice of material changes through email or our website. Continued use of our Services after changes take effect constitutes acceptance of the modified Terms. If you disagree with any changes, you must stop using our Services.`
    },
    {
      title: "15. General Provisions",
      content: `• **Entire Agreement:** These Terms, along with our Privacy Policy and service agreements, constitute the entire agreement between you and DirectPay
• **Severability:** If any provision is found unenforceable, the remaining provisions remain in effect
• **Waiver:** Our failure to enforce any right does not waive that right
• **Assignment:** You may not assign these Terms without our consent; we may assign freely
• **Notices:** Notices to DirectPay must be sent to legal@directpay.ph`
    },
    {
      title: "16. Contact Information",
      content: `For questions about these Terms, please contact us:

**DirectPay Solutions Inc.**
Email: legal@directpay.ph
Phone: +63 (2) 8888-1234
Address: BGC, Taguig City, Philippines`
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
              Terms of Service
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
                Please read these Terms of Service carefully before using DirectPay's payment services.
                These Terms govern your access to and use of our services.
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

export default Terms;
