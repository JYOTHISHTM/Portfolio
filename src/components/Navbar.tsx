export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-40 bg-white/80 backdrop-blur border-b border-black/10">
      <div className="w-5xl mx-auto px-4 py-9 flex items-center justify-between">
        <div className="absolute left-1/2 -translate-x-1/2 flex space-x-10 font-serif text-lg text-gray-800">
          <a href="#home" className="hover:opacity-60">Home</a>
          <a href="#projects" className="hover:opacity-60">Projects</a>
          <a href="#contact" className="hover:opacity-60">Contact</a>
        </div>

      </div>
    </nav>
  );  
}
  