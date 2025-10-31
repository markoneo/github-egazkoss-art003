import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import LetterGlitch from './LetterGlitch';
import ScrambledText from './ScrambledText';

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
        <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl border border-white/10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 tracking-tight drop-shadow-2xl">
            <ScrambledText
              className="inline-block"
              radius={100}
              duration={1.5}
              speed={0.6}
              scrambleChars=".:#@*"
            >
              ARTCOMP
            </ScrambledText>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white font-medium mb-8 sm:mb-12 min-h-[2em] drop-shadow-lg">
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

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
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
      </div>
    </section>
  );
}
