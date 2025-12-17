import { motion } from "framer-motion";

export function FlowSection({
  children,
  className = "",
  z = 10,
}: {
  children: React.ReactNode;
  className?: string;
  z?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`
        relative
        -mt-32
        z-[${z}]
        rounded-t-[4rem]
        bg-background
        shadow-xl
        ${className}
      `}
    >
      {children}
    </motion.section>
  );
}
