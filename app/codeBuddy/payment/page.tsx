
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState("core")
  const [billingCycle, setBillingCycle] = useState("monthly")
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    cardholderName: "",
    country: "United States",
    address: "",
    city: "",
    state: "",
    zipCode: ""
  })

  const plans = {
    core: {
      name: "CodeBuddy Core",
      monthly: 25,
      yearly: 250,
      description: "Create, launch, and share your apps"
    },
    teams: {
      name: "Teams",
      monthly: 40,
      yearly: 400,
      description: "Bring CodeBuddy to your entire team"
    }
  }

  const currentPlan = plans[selectedPlan as keyof typeof plans]
  const price = billingCycle === "monthly" ? currentPlan.monthly : currentPlan.yearly
  const tax = 0
  const total = price + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle payment submission
    console.log("Payment submitted:", { selectedPlan, billingCycle, formData })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/codeBuddy/plans" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center mb-4">
            ← Back to plans
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Subscribe to CodeBuddy
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Payment Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Pay with card
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Card Information */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Card information
                </label>
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-t-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="1234 1234 1234 1234"
                      required
                    />
                    <div className="absolute right-3 top-2.5">
                      <span className="text-xs text-blue-600 font-medium">VISA</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-0">
                    <div className="grid grid-cols-2 gap-0">
                      <input
                        type="text"
                        name="expiryMonth"
                        value={formData.expiryMonth}
                        onChange={handleInputChange}
                        className="px-3 py-2 border border-gray-300 dark:border-gray-600 border-r-0 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="MM"
                        maxLength={2}
                        required
                      />
                      <input
                        type="text"
                        name="expiryYear"
                        value={formData.expiryYear}
                        onChange={handleInputChange}
                        className="px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="YY"
                        maxLength={2}
                        required
                      />
                    </div>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="px-3 py-2 border border-gray-300 dark:border-gray-600 border-l-0 rounded-b-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="CVC"
                      maxLength={3}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Cardholder Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Cardholder name
                </label>
                <input
                  type="text"
                  name="cardholderName"
                  value={formData.cardholderName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Full name on card"
                  required
                />
              </div>

              {/* Billing Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Billing address
                </label>
                <div className="space-y-3">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Australia">Australia</option>
                    <option value="Malaysia">Malaysia</option>
                  </select>
                  
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Address"
                    required
                  />
                  
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="City"
                      required
                    />
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="ZIP code"
                      required
                    />
                  </div>
                  
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select state</option>
                    <option value="CA">California</option>
                    <option value="NY">New York</option>
                    <option value="TX">Texas</option>
                    <option value="FL">Florida</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium"
              >
                Subscribe
              </Button>

              {/* Terms */}
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                <p className="mb-2">
                  By confirming your subscription, you allow CodeBuddy to charge you for future payments in accordance with their terms. You can always cancel your subscription.
                </p>
                <p>
                  By placing your order, you agree to our{" "}
                  <Link href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              {/* Refund Policy */}
              <div className="text-center">
                <Link href="/refund" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  💫 Eligible for a refund
                </Link>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-800 dark:bg-gray-700 rounded-lg p-8 text-white">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

            {/* Plan Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">Select Plan</label>
              <div className="space-y-2">
                <label className="flex items-center p-3 border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-700">
                  <input
                    type="radio"
                    name="plan"
                    value="core"
                    checked={selectedPlan === "core"}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-medium">CodeBuddy Core</div>
                    <div className="text-sm text-gray-300">{plans.core.description}</div>
                  </div>
                </label>
                <label className="flex items-center p-3 border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-700">
                  <input
                    type="radio"
                    name="plan"
                    value="teams"
                    checked={selectedPlan === "teams"}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-medium">Teams</div>
                    <div className="text-sm text-gray-300">{plans.teams.description}</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Billing Cycle */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">Billing Cycle</label>
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => setBillingCycle("monthly")}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium ${
                    billingCycle === "monthly"
                      ? "bg-white text-gray-900"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle("yearly")}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium ${
                    billingCycle === "yearly"
                      ? "bg-white text-gray-900"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>{currentPlan.name}</span>
                <span>US${price}.00</span>
              </div>
              <div className="text-sm text-gray-300">
                Billed {billingCycle}
              </div>
              
              <hr className="border-gray-600" />
              
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>US${price}.00</span>
              </div>
              
              <div>
                <div className="flex justify-between items-center">
                  <span>Add promotion code</span>
                  <button className="text-blue-400 hover:text-blue-300 text-sm">
                    Add
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between">
                <span>Tax</span>
                <span>US${tax}.00</span>
              </div>
              
              <hr className="border-gray-600" />
              
              <div className="flex justify-between text-lg font-semibold">
                <span>Total due today</span>
                <span>US${total}.00</span>
              </div>
            </div>

            {/* Features List */}
            <div className="text-sm text-gray-300">
              <div className="font-medium mb-2">What's included:</div>
              <ul className="space-y-1">
                {selectedPlan === "core" ? (
                  <>
                    <li>• CodeBuddy Agent</li>
                    <li>• Deploy and host live apps</li>
                    <li>• Unlimited private apps</li>
                    <li>• ${price} monthly credits</li>
                    <li>• Pay-as-you-go for usage</li>
                  </>
                ) : (
                  <>
                    <li>• Everything in Core</li>
                    <li>• Centralized billing</li>
                    <li>• Role-based access control</li>
                    <li>• ${price} monthly credits</li>
                    <li>• Private deployments</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
