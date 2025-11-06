export default function YearSelector({ year, onYearChange }) {
  const years = [2023, 2022, 2021, 2020, 2019]

  return (
    <select
      value={year}
      onChange={(e) => onYearChange(parseInt(e.target.value))}
      className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    >
      {years.map(y => (
        <option key={y} value={y}>{y}</option>
      ))}
    </select>
  )
}
