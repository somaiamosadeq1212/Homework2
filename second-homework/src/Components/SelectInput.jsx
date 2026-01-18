export default function SelectInput({ label, value, onChange, placeholder, options }) {
    return (
        <div className="field">
            <label className="label">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="input"
            >
                <option value="" disabled hidden>{placeholder || "Select one"}</option>
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </div>
    )
}