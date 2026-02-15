"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  "150+ Properties",
  "98% Client Satisfaction",
  "10 Years Experience",
];

export function Hero() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80"
          alt="Luxury home"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a192f]/80" />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-24 text-center">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Find Your Dream Home
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-xl text-[#ccd6f6] sm:text-2xl"
        >
          Premium properties
        </motion.p>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex w-full max-w-2xl flex-wrap items-center justify-center gap-3 rounded-lg bg-[#112240]/90 p-4 backdrop-blur sm:flex-nowrap"
        >
          <select className="h-12 flex-1 min-w-[120px] rounded border border-[#8892b0]/50 bg-[#0a192f]/80 px-4 text-[#e6f1ff] focus:border-[#ffd700] focus:outline-none focus:ring-1 focus:ring-[#ffd700]">
            <option value="">Price range</option>
            <option value="100-300">€100k – €300k</option>
            <option value="300-500">€300k – €500k</option>
            <option value="500-1m">€500k – €1M</option>
            <option value="1m+">€1M+</option>
          </select>
          <select className="h-12 flex-1 min-w-[120px] rounded border border-[#8892b0]/50 bg-[#0a192f]/80 px-4 text-[#e6f1ff] focus:border-[#ffd700] focus:outline-none focus:ring-1 focus:ring-[#ffd700]">
            <option value="">Bedrooms</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
          <button
            type="button"
            className="h-12 rounded bg-[#ffd700] px-6 font-semibold text-[#0a192f] transition hover:bg-[#ccac00]"
          >
            Search
          </button>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 text-[#ccd6f6]"
        >
          {stats.map((stat, i) => (
            <span key={stat} className="flex items-center gap-2">
              {i > 0 && <span className="text-[#8892b0]">|</span>}
              <span className="font-medium">{stat}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
