export default function TextInput({ id, label, value, onChange, placeholder, error }) {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>{label}</label>
        <input
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          id={id}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
  