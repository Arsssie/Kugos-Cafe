

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <span className="text-35px text-indigo-900 climate-font">
        Kugos Coffee Co.
      </span>
      <div className="flex items-center gap-7">
        <a href="#home" className="text-gray-700 hover:text-indigo-900">Home</a>
        <a href="#menu" className="text-gray-700 hover:text-indigo-900">Menu</a>
        <a href="#about" className="text-gray-700 hover:text-indigo-900">About Us</a>
        <div className="flex items-center border border-indigo-900 rounded-full px-3 py-1">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-24"
          />
        </div>
      </div>
    </nav>
  );
}