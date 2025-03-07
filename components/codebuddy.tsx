"use client"

import React, { useState } from "react"

const CodeBuddy = () => {
  const [query, setQuery] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <div className="fixed inset-x-0 bottom-0 bg-transparent p-4">
      <div className="mx-auto max-w-3xl ">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Coming Soon"
          value={query}
          onChange={handleInputChange}
          className="w-full max-w-2xl rounded-2xl border border-gray-500 p-8 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
    </div>
  )
}

export default CodeBuddy
