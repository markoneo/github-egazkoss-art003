import { ArrowRight, Brain, Cpu, Network, Sparkles, Zap } from 'lucide-react';

export default function HeroNew() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 opacity-60"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float-slow">
          <Brain className="w-16 h-16 text-slate-300 opacity-40" />
        </div>
        <div className="absolute top-40 right-20 animate-float-slower">
          <Cpu className="w-12 h-12 text-blue-300 opacity-30" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float">
          <Network className="w-14 h-14 text-slate-300 opacity-40" />
        </div>
        <div className="absolute top-1/3 right-10 animate-float-slow">
          <Sparkles className="w-10 h-10 text-blue-300 opacity-30" />
        </div>
        <div className="absolute bottom-40 right-1/4 animate-float-slower">
          <Zap className="w-12 h-12 text-slate-300 opacity-40" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 tracking-tight">
          ARTCOMP
        </h1>

        <p className="text-xl md:text-2xl text-slate-700 font-medium mb-6">
          AI Development & Intelligent Automation
        </p>

        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          We build AI agents, websites, and call assistants that simplify business operations.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button className="group px-10 py-4 bg-slate-900 text-white rounded-lg font-semibold text-base hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
            View Our Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="px-10 py-4 bg-white border-2 border-slate-900 text-slate-900 rounded-lg font-semibold text-base hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
            Build With Us
          </button>
        </div>
      </div>
    </section>
  );
}
