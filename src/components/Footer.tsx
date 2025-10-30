export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-slate-400">
          © ARTComp {currentYear}
        </p>
      </div>
    </footer>
  );
}
