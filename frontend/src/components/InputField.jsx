const InputField = ({
  label,
  name,
  value,
  placeholder,
  type = "text",
  onChange,
  readOnly = false
}) => {
  return (
    <div className="flex flex-col gap-1 mb-3">
      {label && (
        <label className="text-base font-bold text-gray-700">
          {label}:
        </label>
      )}

      <input
        type={type}
        name={name}
        value={value || ""}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}
        className={`
        ${readOnly ? "bg-gray-100 outline-none" : "focus:outline-none focus:ring-2 focus:ring-blue-500"}
        border border-gray-300 rounded-md shadow-sm px-3 py-2 `}
      />
    </div>
  );
};

export default InputField;
