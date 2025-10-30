import { ArrowRight } from 'lucide-react';

export default function HeroNew() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0RjQ2RTUiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight">
          ARTCOMP
        </h1>

        <p className="text-2xl md:text-3xl text-indigo-300 font-light mb-4 tracking-wide">
          AI Development & Intelligent Automation
        </p>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          We build AI agents, websites, and call assistants that simplify business operations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group px-8 py-4 bg-white text-slate-900 rounded-full font-medium text-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
            View Our Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-medium text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
            Build With Us
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
