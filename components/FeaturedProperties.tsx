"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    price: "€485,000",
    address: "12 Marina View, Dublin",
    beds: 4,
    baths: 3,
    sqft: "2,400",
    badge: "New" as const,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    price: "€720,000",
    address: "8 Oak Lane, Cork",
    beds: 5,
    baths: 4,
    sqft: "3,100",
    badge: null,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    price: "€395,000",
    address: "22 Garden Road, Galway",
    beds: 3,
    baths: 2,
    sqft: "1,850",
    badge: "Reduced" as const,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    price: "€1,250,000",
    address: "5 Cliff Drive, Killiney",
    beds: 6,
    baths: 5,
    sqft: "4,200",
    badge: "New" as const,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    price: "€310,000",
    address: "44 Riverside, Limerick",
    beds: 3,
    baths: 2,
    sqft: "1,600",
    badge: "Reduced" as const,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    price: "€890,000",
    address: "3 Hillcrest, Dalkey",
    beds: 5,
    baths: 4,
    sqft: "2,900",
    badge: null,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export function FeaturedProperties() {
  return (
    <section id="featured" className="scroll-mt-20 bg-[#0a192f] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Featured Properties
          </h2>
          <p className="mt-2 text-[#8892b0]">
            Hand-picked premium listings
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {properties.map((prop) => (
            <motion.article
              key={prop.id}
              variants={item}
              className="group overflow-hidden rounded-xl border border-[#112240] bg-[#112240]/50 transition hover:border-[#ffd700]/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={prop.image}
                  alt={prop.address}
                  fill
                  className="object-cover transition group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {prop.badge && (
                  <span
                    className={`absolute left-3 top-3 rounded px-2 py-1 text-sm font-medium ${
                      prop.badge === "New"
                        ? "bg-[#ffd700] text-[#0a192f]"
                        : "bg-red-600/90 text-white"
                    }`}
                  >
                    {prop.badge}
                  </span>
                )}
                <div className="absolute bottom-3 left-3 text-2xl font-bold text-white drop-shadow-lg">
                  {prop.price}
                </div>
              </div>
              <div className="p-4">
                <p className="text-[#ccd6f6]">{prop.address}</p>
                <div className="mt-3 flex gap-4 text-sm text-[#8892b0]">
                  <span title="Bedrooms">🛏 {prop.beds}</span>
                  <span title="Bathrooms">🚿 {prop.baths}</span>
                  <span title="Sq ft">📐 {prop.sqft} sqft</span>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-lg border border-[#ffd700] py-2 font-medium text-[#ffd700] transition hover:bg-[#ffd700] hover:text-[#0a192f]"
                >
                  View Details
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
