export default function LayerToggle({ layers, activeLayers, onToggle }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h3 className="font-bold mb-3">Capas Económicas</h3>
      <div className="space-y-2">
        {Object.entries(layers).map(([key, label]) => (
          <label key={key} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={activeLayers[key] || false}
              onChange={() => onToggle(key)}
              className="rounded text-blue-600"
            />
            <span className="text-sm">{label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
