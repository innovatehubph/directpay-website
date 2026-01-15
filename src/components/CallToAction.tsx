import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section id="contact" className="py-12 lg:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center md:text-left">
            Ready to go live in the Philippines?
          </h2>
          <Button variant="cta" size="xl">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
