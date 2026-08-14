"use client";

import { motion, type Variants } from "motion/react";
import type { ComponentProps } from "react";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  delay = 0,
  ...props
}: ComponentProps<typeof motion.div> & { delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={itemVariants}
      transition={{ duration: 0.8, ease: EASE, delay }}
      {...props}
    />
  );
}

export function RevealGroup({
  stagger = 0.08,
  ...props
}: ComponentProps<typeof motion.div> & { stagger?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ staggerChildren: stagger }}
      {...props}
    />
  );
}

export function RevealItem(props: ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 0.8, ease: EASE }}
      {...props}
    />
  );
}
