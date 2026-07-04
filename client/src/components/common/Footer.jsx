import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3E2723] text-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#F7C873] text-[#3E2723] font-bold flex items-center justify-center text-lg">
              LS
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Lok<span className="text-[#F7C873]">Setu</span>
              </h2>
              <p className="text-sm text-gray-400">
                Bridging People with Digital Services
              </p>
            </div>
          </div>

          <p className="text-gray-400 leading-7">
            LokSetu is a digital platform designed to connect citizens with
            essential government and public services through a simple,
            transparent, and user-friendly experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-[#F7C873]">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:text-[#F7C873] transition">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#F7C873] transition">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#F7C873] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#F7C873] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-[#F7C873]">Contact</h3>

          <div className="space-y-4 text-gray-400">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#F7C873]" />
              <span>New Delhi, India</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#F7C873]" />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#F7C873]" />
              <span>support@loksetu.com</span>
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-[#F7C873]">
            Follow Us
          </h3>

          <p className="text-gray-400 mb-5">
            Stay connected for updates, announcements, and new digital services.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#5D4037] hover:bg-[#F7C873] hover:text-[#3E2723] flex items-center justify-center transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#5D4037] hover:bg-[#F7C873] hover:text-[#3E2723] flex items-center justify-center transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#5D4037] hover:bg-[#F7C873] hover:text-[#3E2723] flex items-center justify-center transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#5D4037] hover:bg-[#F7C873] hover:text-[#3E2723] flex items-center justify-center transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#5D4037]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} LokSetu. All Rights Reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-[#F7C873] transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-[#F7C873] transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
