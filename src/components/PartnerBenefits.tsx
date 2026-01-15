const benefits = [
  {
    left: { title: "Unified QRPH", desc: "One integration for all banks and wallets" },
    right: { desc: "Improved cash with PH options" },
  },
  {
    left: { desc: "Improved cash flow with T+0 or T+1 options" },
    right: { title: "Local Support", desc: "" },
  },
  {
    left: { title: "Local Support", desc: "" },
    right: { desc: "On Philippine market" },
  },
  {
    left: { desc: "Full adherence to BSP (Bangko Sentral ng Pilipinas) regulations" },
    right: { title: "", desc: "" },
  },
];

const partners = [
  { name: "V5 Pay", color: "bg-primary" },
  { name: "InstaPay", color: "bg-green-500" },
  { name: "MetroBank", color: "bg-red-500" },
  { name: "BPI", color: "bg-red-600" },
];

const PartnerBenefits = () => {
  return (
    <section id="partnership" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
          Partner Benefits Table
        </h2>

        <div className="bg-card rounded-xl shadow-card overflow-hidden">
          {/* Header */}
          <div className="grid md:grid-cols-2 border-b border-border">
            <div className="p-6 font-semibold text-foreground">
              Partner Benefits Table
            </div>
            <div className="p-6 font-semibold text-foreground border-l border-border">
              Powering the next generation of fintech in Southeast Asia
            </div>
          </div>

          {/* Benefits rows */}
          <div className="divide-y divide-border">
            {benefits.map((benefit, index) => (
              <div key={index} className="grid md:grid-cols-2">
                <div className="p-4">
                  <div className="benefit-row">
                    {benefit.left.title && (
                      <span className="font-medium">{benefit.left.title}</span>
                    )}
                    {benefit.left.title && benefit.left.desc && " | "}
                    <span className="text-muted-foreground">{benefit.left.desc}</span>
                  </div>
                </div>
                <div className="p-4 border-l border-border">
                  <div className="benefit-row">
                    {benefit.right.title && (
                      <span className="font-medium">{benefit.right.title}</span>
                    )}
                    {benefit.right.title && benefit.right.desc && " | "}
                    <span className="text-muted-foreground">{benefit.right.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partners logos */}
          <div className="p-6 border-t border-border">
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className={`w-8 h-8 ${partner.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-white font-bold text-xs">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-medium text-foreground text-sm">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBenefits;
