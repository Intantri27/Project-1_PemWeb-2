interface SelectProps {
  label: string;
  name: string;
  options: { label: string; value: string }[];
  register: any;
  error?: string;
}

export const SelectInput = ({
  label,
  name,
  options,
  register,
  error,
}: SelectProps) => {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <select {...register(name)} className="w-full border p-2 rounded">
        <option value="">Pilih kategori</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};