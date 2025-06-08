
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CodeBuddy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Build with
              <br />
              CodeBuddy
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Create user-facing experiences, new products, and new ways to work with the
              most advanced AI coding assistant on the market.
            </p>
            <div className="flex gap-4">
              <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg">
                Start building
              </Button>
              <Button variant="outline" className="border-gray-300 px-6 py-3 rounded-lg">
                Developer docs
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 relative">
              {/* Abstract coding illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20"></div>
              <div className="absolute top-10 left-10 w-20 h-20 bg-orange-500 rounded-lg transform rotate-12"></div>
              <div className="absolute bottom-20 right-10 w-32 h-4 bg-gray-800 rounded-full"></div>
              <div className="absolute bottom-16 right-10 w-32 h-4 bg-gray-600 rounded-full"></div>
              <div className="absolute bottom-12 right-10 w-24 h-4 bg-gray-400 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-black"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-y-4 w-8 h-1 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Get started</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Self-serve */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Self-serve</h3>
              <p className="text-gray-600 mb-6">Launch your own AI coding solution with:</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-gray-600">• Access to all CodeBuddy models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600">• Usage-based tiers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600">• Automatically increasing rate limits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600">• Simple pay-as-you-go pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600">• Self-serve deployment on workbench</span>
                </li>
                <li className="flex items-start">
                  <Link href="/documentation" className="text-blue-600 hover:text-blue-800">
                    • Prompting guides & developer documentation
                  </Link>
                </li>
              </ul>
              <Button className="bg-black text-white hover:bg-gray-800 w-full">
                Start building
              </Button>
            </div>

            {/* Additional Support */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need additional support?</h3>
              <p className="text-gray-600 mb-6">
                Need custom rate limits or hands-on support? Reach out to the CodeBuddy team for:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-gray-600">• CodeBuddy-supported onboarding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600">• Custom rate limits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600">• Billing via monthly invoices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600">• Prompting support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600">• Deployment support</span>
                </li>
              </ul>
              <Button variant="outline" className="border-gray-300 w-full">
                Speak with sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Model Family Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">The CodeBuddy model family</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Right-sized for any task, the CodeBuddy family of models offers the best combination of speed and performance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Lite Model */}
            <div className="text-center">
              <div className="bg-green-50 text-green-600 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                Light & Fast
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lite</h3>
              <p className="text-gray-600">
                Our fastest model that can execute lightweight coding actions, with industry-leading speed.
              </p>
            </div>

            {/* Pro Model */}
            <div className="text-center">
              <div className="bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                Hard Working
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
              <p className="text-gray-600">
                Our best combination of performance and speed for efficient, high-throughput coding tasks.
              </p>
            </div>

            {/* Expert Model */}
            <div className="text-center">
              <div className="bg-purple-50 text-purple-600 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                Powerful
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert</h3>
              <p className="text-gray-600">
                Our highest-performing model, which can handle complex analysis, architecture design, and advanced coding tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Use cases for CodeBuddy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Code Generation</h4>
                <p className="text-gray-600 mb-4">
                  CodeBuddy models excel at generating clean, efficient code across multiple programming languages 
                  and frameworks, from simple functions to complex applications.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn more →
                </Link>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Code Review & Debugging</h4>
                <p className="text-gray-600 mb-4">
                  Superior code analysis, bug detection, optimization suggestions, and automated testing 
                  for improved code quality and developer productivity.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn more →
                </Link>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Documentation</h4>
                <p className="text-gray-600">
                  Automatically generate comprehensive documentation, API references, and code comments 
                  to improve code maintainability and team collaboration.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Learning & Mentorship</h4>
                <p className="text-gray-600">
                  CodeBuddy can explain complex concepts, provide coding tutorials, and offer personalized 
                  guidance to help developers learn and grow their skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Leading companies build with CodeBuddy</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              "TechCorp", "DevTools Inc", "CodeBase", "BuildFast", "DevOps Pro", "ScaleUp",
              "InnovateTech", "CloudBuild", "AppFactory", "DataDriven", "NextGen", "SmartCode"
            ].map((company, index) => (
              <div key={index} className="text-center">
                <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-600 font-medium text-sm">{company}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
              Read customer stories →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Start building with the CodeBuddy API</h2>
          <div className="flex justify-center gap-6">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              See pricing
            </Button>
            <Button className="bg-white text-gray-900 hover:bg-gray-100">
              Speak with sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
