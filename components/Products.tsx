const products = [
  {
    name: "OnMyPC AI",
    tagline: "Your Personal Language Assistant",
    description: "Powered by Ollama and Gemma3 4B model. Grammar correction, translation, summarization, and email rewriting - all in one powerful offline, portable application. No installation needed!",
    version: "v1.0.0",
    size: "111 MB",
    downloadUrl: "https://github.com/kilhoshin/onmypc-ai-website/releases/download/v1.0.0/OnMyPC-AI-win32-x64.zip",
    features: [
      "Grammar Correction",
      "Multi-language Translation",
      "Text Summarization",
      "Email Rewriting",
    ],
    available: true,
    platformNote: "Windows x64 • Portable • No Installation Required",
    techNote: "Powered by Ollama & Gemma3 4B",
  },
  {
    name: "OnMyPC Legal AI",
    tagline: "Confidential Legal Discovery Companion",
    description: "Fully local legal search and discovery delivered as a portable Electron desktop app.",
    version: "v1.0.0",
    size: "547 MB",
    downloadUrl: "https://github.com/kilhoshin/onmypc-legal-ai/releases/download/v1.0.0/OnMyPC-Legal-AI-win.zip",
    features: [
      "Offline-first analysis",
      "Document-aware ingestion",
      "Hybrid relevance engine",
      "Operational guardrails",
      "One-click distribution",
    ],
    available: true,
    platformNote: "Windows x64 • Portable • Electron Desktop App",
    techNote: "Hybrid BM25 + Vector Retrieval • Bundled Python Runtime",
  },
  {
    name: "OnMyPC HIPAA-Safe Translator",
    tagline: "Healthcare Communication Without the Cloud",
    description: "One-stop offline translator that onboards clinical teams with secure, local deployments and medical-aware translation pipelines.",
    version: "v1.0.0",
    size: "1.07 GB (includes bundled Ollama runtime)",
    downloadUrl: "https://github.com/kilhoshin/hipaa-safe-translator/releases/download/v1.0.0/hipaa-safe-translator-v1.0.0.zip",
    features: [
      "Bundled Ollama runtime with Gemma 3:4B onboarding",
      "Medical-aware translation pipeline",
      "TXT/PDF/DOCX/RTF/clipboard ingestion",
      "Exportable QA-ready reports",
      "Sample multilingual medical documents",
    ],
    available: true,
    platformNote: "Windows x64 • Portable • Offline Translator Suite",
    techNote: "Medical glossary prompts • Encrypted glossary/audit store",
  },
  {
    name: "OnMyPC Coder AI",
    tagline: "AI-Powered Coding Assistant",
    description: "Code generation, debugging, and refactoring tools for developers. Coming soon to help you build faster without exposing source code.",
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
                <div className="mt-3 text-center space-y-1">
                  {product.platformNote && (
                    <p className="text-xs text-gray-500">
                      {product.platformNote}
                    </p>
                  )}
                  {product.techNote && (
                    <p className="text-xs text-gray-500">
                      {product.techNote}
                    </p>
                  )}
                </div>
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
