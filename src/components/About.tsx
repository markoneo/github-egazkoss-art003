import ScrambledText from './ScrambledText';

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">About ARTComp</h2>

        <ScrambledText
          className="text-lg text-gray-600 leading-relaxed"
          radius={100}
          duration={2}
          speed={0.3}
          scrambleChars=".:"
        >
          ARTComp builds technology that works intelligently for humans. From AI agents to complete ecosystems, we integrate automation and design into everything we create.
        </ScrambledText>
      </div>
    </section>
  );
}
