const products = [
  {
    name: "OnMyPC AI",
    tagline: "Your Personal Language Assistant",
    description: "Grammar correction, translation, summarization, and email rewriting - all in one powerful offline application.",
    version: "v1.0.0",
    size: "111 MB",
    downloadUrl: "https://github.com/YOUR_USERNAME/onmypc-ai/releases/download/v1.0.0/OnMyPC-AI-win32-x64.zip",
    features: [
      "Grammar Correction",
      "Multi-language Translation",
      "Text Summarization",
      "Email Rewriting",
    ],
    available: true,
  },
  {
    name: "OnMyPC Coder AI",
    tagline: "AI-Powered Coding Assistant",
    description: "Code generation, debugging, and refactoring tools for developers. Coming soon to help you code faster and smarter.",
    version: "Coming Soon",
    size: "TBA",
    downloadUrl: "#",
    features: [
      "Code Generation",
      "Bug Detection",
      "Code Refactoring",
      "Documentation Helper",
    ],
    available: false,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 px-6 bg-gray-900/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Products</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful local AI tools designed to enhance your productivity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative p-8 bg-gradient-to-br from-gray-900 to-gray-800 border rounded-2xl transition-all ${
                product.available
                  ? "border-primary/50 hover:border-primary shadow-lg shadow-primary/20"
                  : "border-gray-700 opacity-75"
              }`}
            >
              {!product.available && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-secondary/20 border border-secondary/50 rounded-full text-sm text-secondary font-semibold">
                  Coming Soon
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-2 text-white">{product.name}</h3>
                <p className="text-primary font-medium">{product.tagline}</p>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">{product.description}</p>

              <div className="mb-6">
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-gray-500">Version:</span>
                  <span className="text-white font-mono">{product.version}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Size:</span>
                  <span className="text-white font-mono">{product.size}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Included Features:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {product.available ? (
                <a
                  href={product.downloadUrl}
                  className="block w-full py-3 bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-lg transition-all font-semibold text-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Download Now
                </a>
              ) : (
                <button
                  disabled
                  className="block w-full py-3 bg-gray-700 text-gray-400 rounded-lg font-semibold text-center cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}

              {product.available && (
                <p className="text-xs text-gray-500 text-center mt-3">
                  Windows x64 • Portable • No Installation Required
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            More products coming soon! Follow our updates to stay informed.
          </p>
        </div>
      </div>
    </section>
  );
}
