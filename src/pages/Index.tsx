import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceBridge from "@/components/ServiceBridge";
import TechnicalArchitecture from "@/components/TechnicalArchitecture";
import PartnerBenefits from "@/components/PartnerBenefits";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServiceBridge />
        <TechnicalArchitecture />
        <PartnerBenefits />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
