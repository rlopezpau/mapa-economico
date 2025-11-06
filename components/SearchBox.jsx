import { useState } from 'react'

const municipalities = [
  { name: 'Madrid', lat: 40.4168, lng: -3.7038 },
  { name: 'Barcelona', lat: 41.3851, lng: 2.1734 },
  { name: 'Valencia', lat: 39.4699, lng: -0.3763 },
  { name: 'Sevilla', lat: 37.3891, lng: -5.9845 }
]

export default function SearchBox({ onLocationSelect }) {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const handleInputChange = (e) => {
    const value = e.target.value
    setQuery(value)
    
    if (value.length > 2) {
      const filtered = municipalities.filter(m =>
        m.name.toLowerCase().includes(value.toLowerCase())
      )
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }

  const handleSelect = (location) => {
    setQuery(location.name)
    setSuggestions([])
    onLocationSelect([location.lat, location.lng], 10)
  }

  return (
    <div className="relative w-64">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Buscar municipio..."
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
      
      {suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {suggestions.map((location, index) => (
            <div
              key={index}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(location)}
            >
              {location.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
