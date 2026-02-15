"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Property Sales",
    description:
      "Full-service sales from listing to closing. We market your property to qualified buyers and negotiate the best terms.",
    icon: "🏠",
  },
  {
    title: "Property Management",
    description:
      "Rent collection, maintenance coordination, tenant screening, and reporting—so you can enjoy passive income without the hassle.",
    icon: "🔑",
  },
  {
    title: "Property Valuation",
    description:
      "Accurate, evidence-based valuations for sales, refinancing, or portfolio reporting. Transparent methodology and detailed reports.",
    icon: "📊",
  },
  {
    title: "Investment Advisory",
    description:
      "Strategic guidance on buy-to-let, commercial assets, and development opportunities. We help you build and protect your portfolio.",
    icon: "💼",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-[#112240]/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-2 text-[#8892b0]">
            End-to-end support for buyers, sellers, and investors
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="rounded-xl border border-[#112240] bg-[#0a192f]/80 p-6 transition hover:border-[#ffd700]/40"
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#ffd700]">
                {service.title}
              </h3>
              <p className="mt-2 text-[#8892b0]">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
