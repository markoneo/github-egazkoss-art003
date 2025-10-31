import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import LetterGlitch from './LetterGlitch';

export default function HeroNew() {
  const [showSubtext, setShowSubtext] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <LetterGlitch
          glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
          glitchSpeed={50}
          smooth={true}
          outerVignette={true}
          centerVignette={false}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 tracking-tight drop-shadow-2xl">
          ARTCOMP
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white font-medium mb-4 sm:mb-6 min-h-[2em] drop-shadow-lg">
          <TypeAnimation
            sequence={[
              'AI Development & Intelligent Automation',
              () => setShowSubtext(true),
            ]}
            wrapper="span"
            speed={50}
            cursor={false}
          />
        </p>

        <p
          className={`text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed transition-opacity duration-1000 drop-shadow-lg ${
            showSubtext ? 'opacity-100' : 'opacity-0'
          }`}
        >
          We build AI agents, websites, and call assistants that simplify business operations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
          <button
            onClick={() => {
              document.getElementById('our-work')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-white text-slate-900 rounded-lg font-semibold text-base hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            View Our Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-base hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Build With Us
          </button>
        </div>
      </div>
    </section>
  );
}
