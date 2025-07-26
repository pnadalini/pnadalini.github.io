import React from "react";

interface Props {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "outline";
  href?: string;
  className?: string;
}

const Button = ({ children, variant = "primary", href, className = "", ...props }: Props) => {
  const baseClasses =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-gray-800 hover:bg-gray-900 text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}>
      {children}
    </Component>
  );
};

export default Button;
