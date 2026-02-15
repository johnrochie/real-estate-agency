"use client";

import { motion } from "framer-motion";

const offices = [
  {
    city: "Dublin",
    address: "12 Merrion Square, Dublin 2",
    phone: "+353 1 234 5678",
    email: "dublin@luxestates.ie",
  },
  {
    city: "Cork",
    address: "5 Lapp's Quay, Cork",
    phone: "+353 21 456 7890",
    email: "cork@luxestates.ie",
  },
  {
    city: "Galway",
    address: "3 Eyre Square, Galway",
    phone: "+353 91 876 5432",
    email: "galway@luxestates.ie",
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-[#112240]/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-2 text-[#8892b0]">
            Visit an office, call, or send a message
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-semibold text-[#ffd700]">
                Our Offices
              </h3>
              <div className="mt-4 space-y-6">
                {offices.map((office) => (
                  <div
                    key={office.city}
                    className="rounded-lg border border-[#112240] bg-[#0a192f]/80 p-4"
                  >
                    <p className="font-medium text-white">{office.city}</p>
                    <p className="text-sm text-[#8892b0]">{office.address}</p>
                    <p className="mt-1 text-sm text-[#ccd6f6]">
                      <a href={`tel:${office.phone}`} className="hover:text-[#ffd700]">
                        {office.phone}
                      </a>
                    </p>
                    <p className="text-sm text-[#ccd6f6]">
                      <a href={`mailto:${office.email}`} className="hover:text-[#ffd700]">
                        {office.email}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="aspect-video overflow-hidden rounded-xl border border-[#112240] bg-[#0a192f]">
              <div className="flex h-full items-center justify-center text-[#8892b0]">
                Map placeholder
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[#112240] bg-[#0a192f]/80 p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-lg font-semibold text-[#ffd700]">
              Send a message
            </h3>
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-[#8892b0]">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-1 w-full rounded border border-[#112240] bg-[#112240]/50 px-4 py-2 text-[#e6f1ff] focus:border-[#ffd700] focus:outline-none focus:ring-1 focus:ring-[#ffd700]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[#8892b0]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 w-full rounded border border-[#112240] bg-[#112240]/50 px-4 py-2 text-[#e6f1ff] focus:border-[#ffd700] focus:outline-none focus:ring-1 focus:ring-[#ffd700]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm text-[#8892b0]">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="mt-1 w-full rounded border border-[#112240] bg-[#112240]/50 px-4 py-2 text-[#e6f1ff] focus:border-[#ffd700] focus:outline-none focus:ring-1 focus:ring-[#ffd700]"
                  placeholder="+353 ..."
                />
              </div>
              <div>
                <label htmlFor="interest" className="block text-sm text-[#8892b0]">
                  Interest
                </label>
                <select
                  id="interest"
                  className="mt-1 w-full rounded border border-[#112240] bg-[#112240]/50 px-4 py-2 text-[#e6f1ff] focus:border-[#ffd700] focus:outline-none focus:ring-1 focus:ring-[#ffd700]"
                >
                  <option value="">Select...</option>
                  <option value="buy">Buying</option>
                  <option value="sell">Selling</option>
                  <option value="rent">Renting</option>
                  <option value="manage">Property Management</option>
                  <option value="valuation">Valuation</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-[#8892b0]">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 w-full rounded border border-[#112240] bg-[#112240]/50 px-4 py-2 text-[#e6f1ff] focus:border-[#ffd700] focus:outline-none focus:ring-1 focus:ring-[#ffd700]"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#ffd700] py-3 font-semibold text-[#0a192f] transition hover:bg-[#ccac00]"
              >
                Send message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
