export default function Features() {
  const features = [
    {
      title: "Multiple AI Models",
      description: "Run various open-source AI models like Llama, Mistral, and more. Switch between models based on your needs.",
      icon: "🤖"
    },
    {
      title: "Chat Interface",
      description: "Intuitive chat interface for natural conversations. Context-aware responses and conversation history.",
      icon: "💬"
    },
    {
      title: "Code Assistant",
      description: "Get help with programming, debugging, and code reviews. Supports multiple programming languages.",
      icon: "👨‍💻"
    },
    {
      title: "Document Analysis",
      description: "Upload and analyze documents, PDFs, and text files. Extract insights and get summaries instantly.",
      icon: "📄"
    },
    {
      title: "Customizable",
      description: "Adjust model parameters, fine-tune responses, and create custom workflows tailored to your needs.",
      icon: "⚙️"
    },
    {
      title: "Resource Efficient",
      description: "Optimized to run on consumer hardware. Smart memory management and GPU acceleration support.",
      icon: "💻"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to harness the power of AI on your personal computer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
