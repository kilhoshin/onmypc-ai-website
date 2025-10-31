export default function Support() {
  return (
    <section id="support" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-12 text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Support Our Work</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              If you find OnMyPC AI useful, consider supporting us! Your contribution helps us
              develop more amazing local AI tools.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://buymeacoffee.com/giroshin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFDD00] hover:bg-[#FFED4E] text-black rounded-lg transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="text-2xl">☕</span>
              Buy Me a Coffee
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-3xl mb-2">💝</div>
              <h3 className="font-semibold mb-1 text-white">One-Time Support</h3>
              <p className="text-sm text-gray-400">Show your appreciation with any amount</p>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-semibold mb-1 text-white">Help Development</h3>
              <p className="text-sm text-gray-400">Fund new features and improvements</p>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-3xl mb-2">🌟</div>
              <h3 className="font-semibold mb-1 text-white">Stay Updated</h3>
              <p className="text-sm text-gray-400">Get early access to new products</p>
            </div>
          </div>
        </div>

        {/* Installation Guide */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Quick Start Guide</span>
          </h3>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold">
                  1
                </span>
                <div>
                  <h4 className="font-semibold text-white mb-1">Download the ZIP file</h4>
                  <p className="text-gray-400 text-sm">
                    Click the download button and save the file to your computer
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold">
                  2
                </span>
                <div>
                  <h4 className="font-semibold text-white mb-1">Extract the archive</h4>
                  <p className="text-gray-400 text-sm">
                    Right-click the ZIP file and extract to your desired location
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold">
                  3
                </span>
                <div>
                  <h4 className="font-semibold text-white mb-1">Run the application</h4>
                  <p className="text-gray-400 text-sm">
                    Double-click the executable file to launch OnMyPC AI
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold">
                  4
                </span>
                <div>
                  <h4 className="font-semibold text-white mb-1">First-time setup (automatic)</h4>
                  <p className="text-gray-400 text-sm">
                    If Ollama or Gemma3 4B model is not installed, the app will download and install
                    them automatically. No installation needed - 100% portable!
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Need Help?</h3>
            <p className="text-gray-400 mb-4">
              Have questions or feedback? We'd love to hear from you!
            </p>
            <a
              href="mailto:kilhoshin1978@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-white font-medium"
            >
              <span>📧</span>
              kilhoshin1978@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
