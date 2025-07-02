import { Instagram, Phone } from "lucide-react";
import logo from "/images/Subject.png";

export default function Footer() {
  return (
    <footer className="bg-white text-pink-600 py-20 shadow-inner" id="contact">
      <div className="max-w-7xl mx-auto px-1 md:flex md:justify-between md:items-start space-y-4 md:space-y-0">
        {/* LEFT: Logo + Brand */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 rounded-full border-2 border-pink-200 shadow mb-2"
          />
          <h1 className="text-lg font-bold tracking-wide">get.nailedbyaish</h1>
        </div>

        {/* RIGHT: Contact Info */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <div className="flex items-center gap-2">
            <Instagram className="w-5 h-5 text-pink-500" />
            <a
              href="https://www.instagram.com/get.nailedbyaish/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @get.nailedbyaish
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-pink-500" />
            <a
              href="https://wa.me/6283449420"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>

          <p className="text-sm text-pink-500 text-center md:text-right">
            Professional Nail Art Services ✨ Book your custom set today!
          </p>
        </div>
      </div>
    </footer>
  );
}
