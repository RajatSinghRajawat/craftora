'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EASE_LUXE } from '@/components/motion';

// Re-mounts on every navigation: a quick, light fade so route changes feel instant.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE_LUXE }}>
      {children}
    </motion.div>
  );
}
