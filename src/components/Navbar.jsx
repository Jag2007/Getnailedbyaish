import logo from "/images/Subject.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-10 rounded-full" />
        <span className="text-pink-600 font-bold text-lg">
          get.nailedbyaish
        </span>
      </div>
      <ul className="flex gap-6 font-regular text-pink-600">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#categories">Categories</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
