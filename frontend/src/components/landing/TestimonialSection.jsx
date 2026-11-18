import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

const TESTIMONIAL_STORIES = [
  {
    id: "story-sarah",
    quote: "“CertiScholar helped me turn my marks into a fully funded degree.”",
    description: "The verification was simple, fast, and completely online. Within two days of uploading my 12th marksheets, my full tuition fee waiver was approved and credited directly to my university fee portal.",
    author: "Sarah Lin",
    role: "B.Tech Computer Science Student · Lovely Professional University",
    badge: "100% Merit Fee Waiver",
    image: "/images/student-quote.jpg",
  },
  {
    id: "story-rahul",
    quote: "“No office visits or stress — my financial aid was approved from home.”",
    description: "Verifying our family income certificate online gave my parents immense relief. CertiScholar saved us from months of traveling to college counters and granted my fee support directly.",
    author: "Rahul Sharma",
    role: "B.Tech Mechanical Engineering Student · Lovely Professional University",
    badge: "Need-Based Financial Aid (EWS)",
    image: "/images/mentor-1.jpg",
  },
  {
    id: "story-priya",
    quote: "“Quick and easy fee discount for children of defense personnel.”",
    description: "As the daughter of an army veteran, claiming my fee discount used to mean collecting multiple physical stamps and signatures. With CertiScholar, it took just a few minutes online.",
    author: "Priya Nair",
    role: "B.Design Multimedia Student · Lovely Professional University",
    badge: "Defense Personnel Fee Concession",
    image: "/images/mentor-4.jpg",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic rotating timer (every 6 seconds unless paused)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIAL_STORIES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeStory = TESTIMONIAL_STORIES[currentIndex];

  return (
    <section id="stories" className="py-24 sm:py-32 bg-[#f4f4f5] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 space-y-16">
        
        {/* Header with Framer Rotating Spark Emblem */}
        <ScrollReveal yOffset={30}>
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#FF5A2B] uppercase font-['Manrope']">
              <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 fill-[#FF5A2B] animate-spark-spin">
                <path d="M50 4C53 34 66 47 96 50C66 53 53 66 50 96C47 66 34 53 4 50C34 47 47 34 50 4Z" />
              </svg>
              <span>Student Success Stories</span>
            </div>
            <h2 className="font-['Manrope'] font-medium text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.1] text-[#171717] tracking-[-0.035em]">
              Real Students. Real Scholarships.
            </h2>
            <p className="text-[14px] sm:text-[15px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
              Read how students from all backgrounds used CertiScholar to verify their marks and fund their university education.
            </p>
          </div>
        </ScrollReveal>

        {/* Automatic Rotating Testimonial Card with Framer Story Card Physics */}
        <ScrollReveal yOffset={60} scale={0.96} duration={900}>
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="bg-white rounded-[28px] p-8 sm:p-12 lg:p-16 shadow-[0_1px_3px_rgba(23,23,23,0.06)] max-w-[1320px] mx-auto border border-black/5 relative group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Student Portrait with Smooth Crossfade */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-[320px] aspect-square rounded-[22px] overflow-hidden shadow-md relative bg-slate-100">
                  <img
                    key={activeStory.image}
                    src={activeStory.image}
                    alt={activeStory.author}
                    className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                  />
                  {/* Subtle Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-white/10 font-['Manrope']">
                      {activeStory.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quote Content with Animated Fade-In */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* 5 Stars */}
                <div className="flex items-center gap-1.5 text-[#F5B93A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Headline Quote */}
                <blockquote className="text-[22px] sm:text-[28px] lg:text-[32px] font-medium text-[#171717] leading-snug tracking-tight font-['Manrope'] transition-all duration-500">
                  {activeStory.quote}
                </blockquote>

                {/* Story */}
                <p className="text-slate-500 text-[14px] sm:text-[15.5px] leading-relaxed font-normal font-['Manrope'] transition-all duration-500">
                  {activeStory.description}
                </p>

                {/* Author Info & Navigation Controls */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <div className="text-[16px] font-semibold text-[#171717] font-['Manrope']">
                      {activeStory.author}
                    </div>
                    <div className="text-[13px] text-slate-500 font-normal font-['Manrope']">
                      {activeStory.role}
                    </div>
                  </div>

                  {/* Navigation Arrows & Story Dots */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 mr-2">
                      {TESTIMONIAL_STORIES.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => setCurrentIndex(dotIdx)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            dotIdx === currentIndex
                              ? 'w-6 bg-[#171717]'
                              : 'w-2 bg-slate-300 hover:bg-slate-400'
                          }`}
                          aria-label={`Go to testimonial ${dotIdx + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() =>
                        setCurrentIndex(
                          (prev) => (prev - 1 + TESTIMONIAL_STORIES.length) % TESTIMONIAL_STORIES.length
                        )
                      }
                      className="w-9 h-9 rounded-full border border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 transition-colors shadow-xs"
                      aria-label="Previous story"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentIndex((prev) => (prev + 1) % TESTIMONIAL_STORIES.length)
                      }
                      className="w-9 h-9 rounded-full border border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 transition-colors shadow-xs"
                      aria-label="Next story"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* Discover More Stories Button with Framer Roll Effect */}
        <ScrollReveal yOffset={20}>
          <div className="text-center pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('scholarships');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center bg-white hover:bg-black text-[#171717] hover:text-white px-7 py-3.5 rounded-full text-xs sm:text-[13px] font-semibold tracking-tight border border-black/10 hover:border-black transition-all duration-300 shadow-xs cursor-pointer overflow-hidden font-['Manrope']"
            >
              <span className="btn-roll">
                <span className="btn-roll-inner">
                  <span>Discover More Stories</span>
                  <span>Discover More Stories</span>
                </span>
              </span>
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
