import React, { MouseEvent } from "react";

export default function Button({
    label,
    type,
    onClick,
}: {
    label: string;
    type?: "button" | "reset" | "submit";
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}) {
    return (
        <button
            {...(onClick ? { onClick } : {})}
            type={type || "button"}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            {label}
        </button>
    );
}
