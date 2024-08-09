import React, { ChangeEvent } from "react";

export default function TextField({
    label,
    id,
    name,
    placeholder,
    type,
    value,
    onChange,
}: {
    label?: string;
    id: string;
    name: string;
    placeholder?: string;
    type?: "text" | "date" | "number" | "time" | "tel"; // can add all input types
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div>
            {label && (
                <label
                    htmlFor={id}
                    className="block text-gray-700 font-medium mb-2"
                >
                    {label}
                </label>
            )}
            <input
                {...(value
                    ? {
                          value,
                      }
                    : {})}
                {...(onChange
                    ? {
                          onChange,
                      }
                    : {})}
                id={id}
                name={name}
                type={type || "text"}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={placeholder || "Enter text"}
            />
        </div>
    );
}
