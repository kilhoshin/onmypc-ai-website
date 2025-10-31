export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      features: [
        "Access to basic AI models",
        "Up to 100 queries per day",
        "Community support",
        "Regular updates"
      ],
      highlighted: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "For power users and professionals",
      features: [
        "Access to all AI models",
        "Unlimited queries",
        "Priority support",
        "Advanced customization",
        "GPU acceleration",
        "Commercial use license"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Custom model training",
        "Dedicated support",
        "Team management",
        "SLA guarantee",
        "On-premise deployment"
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include core features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl scale-105'
                  : 'bg-white dark:bg-gray-800 shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${
                plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
              }`}>
                {plan.name}
              </h3>

              <div className="mb-4">
                <span className={`text-5xl font-bold ${
                  plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}>
                    {plan.period}
                  </span>
                )}
              </div>

              <p className={`mb-6 ${
                plan.highlighted ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'
              }`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <span className={`mr-2 ${plan.highlighted ? 'text-blue-200' : 'text-blue-600'}`}>
                      ✓
                    </span>
                    <span className={plan.highlighted ? 'text-blue-50' : 'text-gray-700 dark:text-gray-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                plan.highlighted
                  ? 'bg-white text-blue-600 hover:bg-blue-50'
                  : 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
              }`}>
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
