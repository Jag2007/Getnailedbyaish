import logo from "/images/Subject.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Logo"
          className="h-10 rounded-full border-2 border-[#e7b2c6]"
        />
        <span className="text-[#e10053] font-bold text-lg">
          get.nailedbyaish
        </span>
      </div>
      <ul className="flex gap-6 font-regular text-[#c3547d]">
        <li>
          <a href="#" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#categories" className="hover:underline">
            Categories
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
