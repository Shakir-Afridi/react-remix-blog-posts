import React, { ChangeEvent } from "react";

export default function Textarea({
    label,
    id,
    name,
    placeholder,
    value,
    onChange,
    rows,
}: {
    label?: string;
    id: string;
    name: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
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
            <textarea
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={rows || 4}
                placeholder={placeholder || "Enter text"}
            />
        </div>
    );
}
