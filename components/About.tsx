"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const agents = [
  {
    name: "Sarah Mitchell",
    role: "Senior Sales Director",
    bio: "15 years in luxury sales. Specialising in coastal and period homes.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "James O'Brien",
    role: "Investment & Valuation",
    bio: "Chartered surveyor. Former head of research at a major fund.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Emma Walsh",
    role: "Property Management",
    bio: "Operations lead for 200+ managed units. Focus on tenant experience.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

const whyChooseUs = [
  "Transparent pricing—no hidden fees",
  "Dedicated point of contact from first call to keys",
  "Data-driven valuations and market reports",
  "Strong track record with investors and first-time buyers",
  "Full compliance and professional indemnity",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-[#0a192f] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            About Luxe Estates
          </h2>
          <p className="mt-2 text-[#8892b0]">
            Your partner in premium property
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-invert mx-auto max-w-3xl text-center"
        >
          <p className="text-[#ccd6f6]">
            Luxe Estates was founded a decade ago with a simple mission: to bring
            the same rigour and discretion to residential property that
            institutional clients expect in commercial real estate. We combine
            local market expertise with a client-first approach, whether you're
            buying your first home, scaling a portfolio, or selling a landmark
            property.
          </p>
          <p className="mt-4 text-[#ccd6f6]">
            Our team includes chartered surveyors, former fund managers, and
            dedicated sales and lettings specialists. We don't just list
            properties—we advise on timing, pricing, and strategy, and we're
            there from first viewing to closing. That's why our client
            satisfaction rate stands at 98% and why we've helped hundreds of
            families and investors find or sell their dream homes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-8 sm:grid-cols-3"
        >
          {agents.map((agent, i) => (
            <div
              key={agent.name}
              className="rounded-xl border border-[#112240] bg-[#112240]/50 p-6 text-center"
            >
              <div className="relative mx-auto aspect-square w-32 overflow-hidden rounded-full">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {agent.name}
              </h3>
              <p className="text-sm text-[#ffd700]">{agent.role}</p>
              <p className="mt-2 text-sm text-[#8892b0]">{agent.bio}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-xl border border-[#112240] bg-[#112240]/30 p-8"
        >
          <h3 className="text-xl font-semibold text-[#ffd700]">
            Why Choose Us
          </h3>
          <ul className="mt-4 space-y-2">
            {whyChooseUs.map((item) => (
              <li key={item} className="flex items-center gap-2 text-[#ccd6f6]">
                <span className="text-[#ffd700]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
