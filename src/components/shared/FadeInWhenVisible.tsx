"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function FadeInWhenVisible({
  children,
  delay = 0.2,
  duration = 0.6,
  yOffset = 50,
}: FadeInWhenVisibleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // Animar solo una vez cuando el 30% del elemento es visible
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
}
