export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="gradient-text">All your language tools,</span>
          <br />
          <span className="text-white">right inside your PC</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          No cloud. No delay. Just your AI.
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          A fully offline desktop application that provides AI-powered language tools including
          grammar correction, translation, summarization, and email rewriting - all running
          locally on your computer with no internet connection required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#products"
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-lg transition-all font-semibold text-lg shadow-lg shadow-primary/50 hover:shadow-primary/70 transform hover:scale-105"
          >
            Download Free
          </a>
          <a
            href="#features"
            className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors font-semibold text-lg border border-gray-700"
          >
            Learn More
          </a>
        </div>

        {/* Stats or badges */}
        <div className="mt-16 flex flex-wrap gap-8 justify-center text-center">
          <div className="flex-1 min-w-[200px]">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-gray-400 mt-1">Private & Offline</div>
          </div>
          <div className="flex-1 min-w-[200px]">
            <div className="text-3xl font-bold text-secondary">Free</div>
            <div className="text-gray-400 mt-1">No Subscriptions</div>
          </div>
          <div className="flex-1 min-w-[200px]">
            <div className="text-3xl font-bold text-primary">4</div>
            <div className="text-gray-400 mt-1">Powerful Features</div>
          </div>
        </div>
      </div>
    </section>
  );
}
