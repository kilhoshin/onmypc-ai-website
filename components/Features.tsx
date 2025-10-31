const features = [
  {
    icon: "✅",
    title: "Grammar Correction",
    description: "Fix grammar, spelling, and punctuation errors with AI-powered precision. Get instant suggestions and improvements for your writing.",
  },
  {
    icon: "🌐",
    title: "Translation",
    description: "Translate between 11 languages with context-aware accuracy. Maintain meaning and tone across different languages seamlessly.",
  },
  {
    icon: "📝",
    title: "Summarization",
    description: "Get concise summaries of long texts and documents. Save time by extracting key information from lengthy content.",
  },
  {
    icon: "✉️",
    title: "Email Rewriting",
    description: "Transform drafts into professional emails with various tones. Choose from formal, casual, friendly, or professional styles.",
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
    title: "Easy Setup",
    description: "Portable installation, no complex configuration. Just download, extract, and run.",
  },
  {
    icon: "🖥️",
    title: "Powered by Ollama",
    description: "Built on open-source Ollama with Gemma 2B model. Automatic installation included.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto">
        {/* Main Features */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need for professional language processing, running privately on your computer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-primary/50 transition-all hover:transform hover:scale-105 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
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
