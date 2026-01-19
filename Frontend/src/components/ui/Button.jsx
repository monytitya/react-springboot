// src/components/ui/Button.jsx
import React from "react";
import clsx from "clsx";

export const Button = ({ children, className, variant = "default", size = "md", ...props }) => {
  // define styles for variant
  const variantStyles = {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  // define styles for size
  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={clsx(
        "font-semibold rounded transition-colors disabled:opacity-50 flex items-center justify-center",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
