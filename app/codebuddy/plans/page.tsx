
import { Button } from "@/components/ui/button"

export default function CodeBuddyPlansPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Compare CodeBuddy plans
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Upgrade your plan to transform ideas into complete apps
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-200 dark:bg-gray-800 rounded-lg p-1 mb-12">
            <button className="px-6 py-2 text-sm font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-700 rounded-md shadow-sm">
              Monthly
            </button>
            <button className="px-6 py-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Yearly
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Starter Plan */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Starter</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">Free</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Just the basics</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Limited CodeBuddy Agent access</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">10 AI requests per day</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Basic AI features</span>
                </li>
              </ul>

              <Button 
                variant="outline" 
                className="w-full border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Your current plan
              </Button>
            </div>

            {/* Core Plan - Highlighted */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 border-2 border-blue-500 dark:border-blue-400 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">CodeBuddy Core</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$25</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">per month</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Create, launch, and share your apps</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">CodeBuddy Agent</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Deploy and host live apps</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Unlimited private apps</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">$25 monthly credits</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Pay-as-you-go for usage</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">...and more C#</span>
                </li>
              </ul>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Continue with Core →
              </Button>
            </div>

            {/* Teams Plan */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Teams</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$40</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">per month</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Bring CodeBuddy to your entire team</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Everything in Core</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Centralized billing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Role-based access control</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">$40 monthly credits</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Private deployments</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">...and more ↗</span>
                </li>
              </ul>

              <Button 
                variant="outline" 
                className="w-full border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                👥 Create a team
              </Button>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
            Prices are subject to tax depending on your location
          </p>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Feature Comparison
          </h2>
          
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left p-6 text-gray-900 dark:text-white font-semibold">Features</th>
                  <th className="text-center p-6 text-gray-900 dark:text-white font-semibold">Starter</th>
                  <th className="text-center p-6 text-gray-900 dark:text-white font-semibold">Core</th>
                  <th className="text-center p-6 text-gray-900 dark:text-white font-semibold">Teams</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-6 text-gray-600 dark:text-gray-300">AI-powered code generation</td>
                  <td className="text-center p-6">
                    <span className="text-green-500">✓</span>
                  </td>
                  <td className="text-center p-6">
                    <span className="text-green-500">✓</span>
                  </td>
                  <td className="text-center p-6">
                    <span className="text-green-500">✓</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-6 text-gray-600 dark:text-gray-300">Code debugging & optimization</td>
                  <td className="text-center p-6">
                    <span className="text-gray-400">Limited</span>
                  </td>
                  <td className="text-center p-6">
                    <span className="text-green-500">✓</span>
                  </td>
                  <td className="text-center p-6">
                    <span className="text-green-500">✓</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-6 text-gray-600 dark:text-gray-300">Private repositories</td>
                  <td className="text-center p-6">
                    <span className="text-red-500">✗</span>
                  </td>
                  <td className="text-center p-6">
                    <span className="text-green-500">✓</span>
                  </td>
                  <td className="text-center p-6">
                    <span className="text-green-500">✓</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-6 text-gray-600 dark:text-gray-300">Team collaboration</td>
                  <td className="text-center p-6">
                    <span className="text-red-500">✗</span>
                  </td>
                  <td className="text-center p-6">
                    <span className="text-red-500">✗</span>
                  </td>
                  <td className="text-center p-6">
                    <span className="text-green-500">✓</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-6 text-gray-600 dark:text-gray-300">Priority support</td>
                  <td className="text-center p-6">
                    <span className="text-red-500">✗</span>
                  </td>
                  <td className="text-center p-6">
                    <span className="text-green-500">✓</span>
                  </td>
                  <td className="text-center p-6">
                    <span className="text-green-500">✓</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Can I change my plan anytime?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and you'll be charged or credited accordingly.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                What happens if I exceed my monthly credits?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                You can purchase additional credits as needed, or your usage will be throttled 
                until the next billing cycle. Team plans include higher credit limits.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Is there a free trial for paid plans?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we offer a 14-day free trial for both Core and Teams plans. 
                No credit card required to start your trial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to supercharge your coding?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already building faster with CodeBuddy AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
