import React from "react";

const Input: React.FC<{
  id: string;
  type: React.HTMLInputTypeAttribute;
  value: string | number;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
}> = ({
  id,
  value,
  label,
  onChange,
  error = "",
  disabled = false,
  required = false,
  type,
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required={required}
        disabled={disabled}
      />
      {error?.length >= 1 && (
        <span className="text-red-500 text-sm">{error}</span>
      )}
    </div>
  );
};

export default Input;
