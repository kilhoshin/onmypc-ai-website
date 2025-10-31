export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold gradient-text">OnMyPC AI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#products" className="text-gray-300 hover:text-primary transition-colors">
              Products
            </a>
            <a href="#support" className="text-gray-300 hover:text-primary transition-colors">
              Support
            </a>
            <a
              href="https://buymeacoffee.com/giroshin"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg transition-colors font-medium"
            >
              Buy Me a Coffee
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
