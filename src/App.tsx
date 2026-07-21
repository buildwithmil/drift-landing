import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import FeaturesSection from './components/FeaturesSection'
import TestimonialsSection from './components/ui/testimonial-v2'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_3B3BkD5XjEYHv2WXvfhs203byWK/hf_20260710_210032_d01766da-2e26-456d-9984-66be36999790.mp4'

export default function App() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="relative h-screen overflow-hidden mb-[-25px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/20" />

        <Navbar />

        {/* Hero content */}
        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 md:pb-16 px-6">
          <h1 className="text-center text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-normal text-white leading-[1.1] tracking-tight">
            Own your time
            <br />
            without{' '}
            <em
              className="not-italic"
              style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
            >
              the stress
            </em>
          </h1>

          <p className="mt-6 text-white/80 text-sm md:text-base font-medium max-w-[420px] text-center">
            Drift is a calm, ADHD-friendly planner that turns scattered ideas into a clear
            path
          </p>

          {/* CTA Bar */}
          <div className="mt-8 flex items-center bg-black/25 backdrop-blur-md rounded-xl pl-6 pr-1 py-1">
            <span className="hidden sm:block text-white text-sm font-medium">
              No noise. No complicated systems. Just your day, gently sorted.
            </span>
            <span className="sm:hidden text-white text-sm font-medium">
              No noise. Just your day, gently sorted.
            </span>
            <button className="ml-4 bg-white text-black text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors shrink-0">
              Start for free
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <AboutSection />

      {/* SECTION 3 */}
      <FeaturesSection />

      {/* SECTION 4: TESTIMONIALS */}
      <TestimonialsSection />
    </>
  )
}
