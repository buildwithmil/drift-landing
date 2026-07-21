import React from 'react'
import { motion } from 'framer-motion'

// --- Types ---
interface Testimonial {
  text: string
  image: string
  name: string
  role: string
}

// --- Data (Drift-themed) ---
const testimonials: Testimonial[] = [
  {
    text: "Drift is the first planner that doesn't shout at me. My scattered thoughts finally land somewhere calm, and I actually finish what I start.",
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Briana Patton',
    role: 'Product Designer',
  },
  {
    text: 'As someone with ADHD, most apps overwhelm me by day two. Drift eased me in gently and just quietly stayed useful. No guilt, no noise.',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Bilal Ahmed',
    role: 'Software Engineer',
  },
  {
    text: 'The morning view shows me only what deserves my energy right now. Starting my day stopped feeling like a decision I had to dread.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Saman Malik',
    role: 'Freelance Writer',
  },
  {
    text: 'Deep focus mode softens everything else until I am ready to shift. I get more done in an hour of Drift than a whole scattered afternoon.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Omar Raza',
    role: 'Founder',
  },
  {
    text: 'It carries the cognitive weight so I can attend to what actually counts. Drift feels like software that finally moves with me, not over me.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Zainab Hussain',
    role: 'Project Manager',
  },
  {
    text: 'Every surface is soft, quiet and intuitive. Planning went from draining to genuinely calming. I look forward to opening it now.',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Aliza Khan',
    role: 'UX Researcher',
  },
  {
    text: 'No clutter, no urgency, no complicated systems. Just my day, gently sorted. Drift respects how my brain actually works.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Farhan Siddiqui',
    role: 'Marketing Lead',
  },
  {
    text: 'I stopped losing ideas between apps. Drift turns the mess in my head into a clear path without ever making me feel behind.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Sana Sheikh',
    role: 'Consultant',
  },
  {
    text: 'Gentle productivity is real, and Drift is the proof. Calm, present, and quietly powerful. It changed how I relate to my own time.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Hassan Ali',
    role: 'Creative Director',
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: '-50%',
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? 'true' : 'false'}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow:
                      '0 25px 50px -12px rgba(50, 28, 4, 0.15), 0 10px 10px -5px rgba(50, 28, 4, 0.06)',
                    transition: { type: 'spring', stiffness: 400, damping: 17 },
                  }}
                  whileFocus={{
                    scale: 1.03,
                    y: -8,
                    boxShadow:
                      '0 25px 50px -12px rgba(50, 28, 4, 0.15), 0 10px 10px -5px rgba(50, 28, 4, 0.06)',
                    transition: { type: 'spring', stiffness: 400, damping: 17 },
                  }}
                  className="p-10 rounded-3xl border border-[#D9C4AA] shadow-lg shadow-[#321C04]/5 max-w-xs w-full bg-[#FFF9F2] transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-[#D9C4AA]"
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-[#321C04]/80 leading-relaxed font-normal m-0">
                      {text}
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-[#D9C4AA] group-hover:ring-[#321C04]/30 transition-all duration-300 ease-in-out"
                      />
                      <div className="flex flex-col">
                        <cite className="font-semibold not-italic tracking-tight leading-5 text-[#321C04]">
                          {name}
                        </cite>
                        <span className="text-sm leading-5 tracking-tight text-[#321C04]/60 mt-0.5">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  )
}

const TestimonialsSection = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative z-10 bg-[#F6E4CF] py-24 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
        className="container px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
          <div className="flex justify-center">
            <div className="border border-[#D9C4AA] py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-[#321C04] bg-[#FFF9F2]">
              Testimonials
            </div>
          </div>

          <h2
            id="testimonials-heading"
            className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 text-center text-[#321C04]"
          >
            Calm minds, sorted days
          </h2>
          <p className="text-center mt-5 text-[#321C04]/70 text-lg leading-relaxed max-w-sm">
            Discover how thousands of people quietly take back their time with Drift.
          </p>
        </div>

        <div
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default TestimonialsSection
