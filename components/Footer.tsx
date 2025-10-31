export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-gray-800 bg-gray-900/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-3">OnMyPC AI</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              All your language tools, right inside your PC. No cloud. No delay. Just your AI.
            </p>
            <p className="text-sm text-gray-500">
              Built with privacy, performance, and simplicity in mind.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-3">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  OnMyPC AI
                </a>
              </li>
              <li>
                <span className="text-gray-600 text-sm">OnMyPC Coder AI (Soon)</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#support" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Support
                </a>
              </li>
              <li>
                <a
                  href="https://buymeacoffee.com/giroshin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Buy Me a Coffee
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} OnMyPC AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <p className="text-gray-500 text-sm">
                Made with <span className="text-red-500">♥</span> for privacy-conscious users
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
