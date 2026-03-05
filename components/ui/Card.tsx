"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      className={`bg-white rounded-3xl p-8 shadow-lg border border-gray-100 ${className}`}
      whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
