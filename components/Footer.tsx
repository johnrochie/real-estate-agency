export function Footer() {
  return (
    <footer className="border-t border-[#112240] bg-[#0a192f] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[#8892b0]">
            © {new Date().getFullYear()} Luxe Estates. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#featured" className="text-[#8892b0] hover:text-[#ffd700]">
              Properties
            </a>
            <a href="#services" className="text-[#8892b0] hover:text-[#ffd700]">
              Services
            </a>
            <a href="#about" className="text-[#8892b0] hover:text-[#ffd700]">
              About
            </a>
            <a href="#contact" className="text-[#8892b0] hover:text-[#ffd700]">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
