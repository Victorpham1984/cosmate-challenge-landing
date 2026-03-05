"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({ children, onClick, variant = "primary", className = "" }: ButtonProps) {
  const base = "inline-flex items-center justify-center font-bold text-lg px-8 py-4 rounded-2xl min-h-[44px] min-w-[44px] transition-all cursor-pointer";
  const variants = {
    primary: "bg-gradient-to-r from-primary to-accent-pink text-white shadow-lg shadow-primary/30",
    secondary: "bg-white text-primary border-2 border-primary",
  };

  return (
    <motion.button
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2, boxShadow: "0 20px 40px rgba(124, 58, 237, 0.3)" }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
