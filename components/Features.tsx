const pillars = [
  {
    icon: "🛡️",
    title: "Local Intelligence",
    description: "Every model runs on-device so sensitive information never touches the cloud. Keep your conversations, documents, and strategy fully under your control.",
  },
  {
    icon: "🔒",
    title: "Compliance Ready",
    description: "Meet industry requirements with self-hosted AI stacks. From legal teams to healthcare organizations, our tools adapt to the policies you already follow.",
  },
  {
    icon: "⚡",
    title: "Instant Performance",
    description: "No network hops or API limits—just sub-second responses, tuned for productivity in the environments where you already work.",
  },
  {
    icon: "🧊",
    title: "Portable Deployment",
    description: "Ship once, run anywhere. Our apps are fully portable and can live on secure workstations, air-gapped PCs, or travel with you on a USB drive.",
  },
];

const benefits = [
  {
    icon: "🔒",
    title: "100% Private",
    description: "All processing happens on your PC. Your data never leaves your computer.",
  },
  {
    icon: "🚫",
    title: "No Internet Required",
    description: "Works completely offline. Use anywhere, anytime without connectivity.",
  },
  {
    icon: "⚡",
    title: "Fast & Responsive",
    description: "Instant results with no network delays. Lightning-fast AI processing on your machine.",
  },
  {
    icon: "💰",
    title: "Free to Use",
    description: "No subscriptions or API costs. Pay once, use forever without hidden fees.",
  },
  {
    icon: "🎯",
    title: "Portable & No Installation",
    description: "100% portable - no installation needed. Just download, extract, and run from any folder.",
  },
  {
    icon: "🧠",
    title: "Local Model Control",
    description: "Mix LLMs, retrieval pipelines, and rule-based flows that stay entirely on your hardware.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto">
        {/* Main Features */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Built for Local-first Teams</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A unified vision: keep AI capabilities close while protecting the data that matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-primary/50 transition-all hover:transform hover:scale-105 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{pillar.title}</h3>
              <p className="text-gray-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Why OnMyPC AI?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built with privacy, performance, and simplicity in mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-xl hover:border-secondary/50 transition-all backdrop-blur-sm"
            >
              <div className="text-3xl mb-3">{benefit.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
