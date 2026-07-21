import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = ['Features', 'Drift AI', 'FAQ']

  return (
    <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
      {/* Floating pill */}
      <div className="bg-white rounded-full shadow-lg flex items-center gap-6 pl-6 pr-4 py-3">
        <span className="text-lg font-bold tracking-tight text-black">Drift.</span>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="relative w-6 h-6 flex flex-col justify-center items-center"
        >
          <span
            className="block h-[2px] w-5 bg-black transition-transform duration-300"
            style={{
              transitionTimingFunction: 'cubic-bezier(0.77,0,0.175,1)',
              transform: open ? 'translateY(2px) rotate(45deg)' : 'translateY(-2px)',
            }}
          />
          <span
            className="block h-[2px] w-5 bg-black transition-transform duration-300"
            style={{
              transitionTimingFunction: 'cubic-bezier(0.77,0,0.175,1)',
              transform: open ? 'translateY(-1px) rotate(-45deg)' : 'translateY(2px)',
            }}
          />
        </button>
      </div>

      {/* Dropdown */}
      <div
        className={`mt-3 w-56 bg-white rounded-2xl shadow-lg p-2 origin-top transition-all duration-300 ${
          open
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }`}
      >
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="block px-4 py-3 rounded-xl text-black font-medium hover:bg-black/5 transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  )
}
