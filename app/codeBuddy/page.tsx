"use client"

import React, { useState } from "react"

interface SearchBarProps {
  onSearch: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleSearch = () => {
    onSearch(query)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-transparent">
      <div className="mx-auto max-w-3xl  px-4 sm:px-6 xl:max-w-1xl ">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Ask Anything"
          value={query}
          onChange={handleInputChange}
          className="w-full max-w-2xl p-8 rounded-2xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Buttons and Icons */}
        <div className="flex space-x-2">
          {/* Plus Button */}
          {/* <button
          className="bg-gray-600 text-white rounded-full p-2 hover:bg-gray-500"
          onClick={() => alert("Plus button clicked")}
        >
          +
        </button> */}

          {/* DeepSearch Button */}
          {/* <button
          className="flex items-center bg-gray-600 text-white rounded-full px-4 py-2 hover:bg-gray-500"
          onClick={() => alert("DeepSearch button clicked")}
        >
          <span className="mr-2">🔍</span> DeepSearch
        </button> */}

          {/* Think Button */}
          {/* <button
          className="flex items-center bg-gray-600 text-white rounded-full px-4 py-2 hover:bg-gray-500"
          onClick={() => alert("Think button clicked")}
        >
          <span className="mr-2">💡</span> Think
        </button> */}
        </div>
      </div>
    </div>
  )
}

export default SearchBar
