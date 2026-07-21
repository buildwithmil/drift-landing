import { useEffect, useRef, useState } from 'react'

const BG_IMAGE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260709_082449_46df5cc4-ad98-4541-9236-a2659c1478a4.png&w=1920&q=85'

const FEATURES = [
  {
    title: 'Built for ease, not urgency',
    description:
      'Drift strips away the noise that makes organizing feel draining. Every surface is made to be soft, quiet, and intuitive so you can move forward, not get stuck decoding.',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_102608_5fa1187d-9ac6-44fb-82ab-54376200abc0.mp4',
  },
  {
    title: 'The gentlest way to start',
    description:
      'Beginning your day should feel natural, not daunting. Drift eases you into motion with subtle cues and a quiet view of what deserves your energy right now.',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260625_174131_395bc785-bb21-4e65-abf6-27c56f0764b6.mp4',
  },
  {
    title: 'Deep, undivided focus',
    description:
      'No interruptions, no clutter. Drift holds you in the present task with a stripped-back layout that softens all else until you are truly ready to shift.',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260525_052706_d2e390fd-1846-4fe7-a4d8-8d2f1c875358.mp4',
  },
]

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 256 256"
      fill="none"
    >
      <path
        d="M 256 256 L 178 256 C 150.386 256 128 233.614 128 206 L 128 256 L 0 256 L 0 192 C 0 156.654 28.654 128 64 128 C 99.346 128 128 156.654 128 192 L 128 128 L 256 128 Z M 78 0 C 105.614 0 128 22.386 128 50 L 128 0 L 256 0 L 256 64 C 256 99.346 227.346 128 192 128 C 156.654 128 128 99.346 128 64 L 128 128 L 0 128 L 0 0 Z"
        fill="rgba(255,255,255,0.8)"
      />
    </svg>
  )
}

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [revealed, setRevealed] = useState<boolean[]>(() => FEATURES.map(() => false))
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index)
            setActiveIndex(idx)
          }
        })
      },
      { threshold: 0.6 },
    )

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index)
            setRevealed((prev) => {
              if (prev[idx]) return prev
              const next = [...prev]
              next[idx] = true
              return next
            })
          }
        })
      },
      { threshold: 0.15 },
    )

    cardRefs.current.forEach((el) => {
      if (el) {
        activeObserver.observe(el)
        revealObserver.observe(el)
      }
    })

    return () => {
      activeObserver.disconnect()
      revealObserver.disconnect()
    }
  }, [])

  const scrollToCard = (idx: number) => {
    cardRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section className="relative px-5 md:px-10 lg:px-16 py-20 md:py-40 lg:py-48">
      {/* Fixed background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />

      <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[460px_1fr] gap-24 xl:gap-48">
        {/* Left column */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-32">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-[46px] leading-[1.2] font-normal">
            Software that flows with your mind, not over it
          </h2>

          {/* Feature nav */}
          <nav className="hidden lg:flex flex-col gap-3 my-12">
            {FEATURES.map((f, i) => (
              <button
                key={f.title}
                onClick={() => scrollToCard(i)}
                className={`text-left px-5 py-4 rounded-2xl font-medium transition-colors bg-black/20 ${
                  activeIndex === i ? 'text-white' : 'text-white/40'
                }`}
              >
                {f.title}
              </button>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="hidden lg:flex items-center bg-black/25 backdrop-blur-md rounded-xl pl-6 pr-1 py-1">
            <span className="text-white text-sm font-medium flex-1">
              No noise. No complicated systems. Just your day, gently sorted.
            </span>
            <button className="bg-white text-black text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors shrink-0">
              Start for free
            </button>
          </div>
        </div>

        {/* Right column — cards */}
        <div className="flex flex-col gap-20 md:gap-32">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              data-index={i}
              ref={(el) => {
                cardRefs.current[i] = el
              }}
              className={`bg-black/20 backdrop-blur-sm rounded-3xl p-6 md:p-10 flex flex-col gap-6 transition-all duration-700 ease-out ${
                revealed[i]
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-16 opacity-0'
              }`}
            >
              <Logo />
              <h3 className="text-white text-xl md:text-2xl font-medium">{f.title}</h3>
              <div className="aspect-video rounded-2xl overflow-hidden bg-black/30">
                <video
                  className="w-full h-full object-cover"
                  src={f.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <p className="text-white/60 font-medium text-sm md:text-base leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
