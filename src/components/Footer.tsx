export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-400 text-sm">
          © ARTComp {currentYear} | Artcomp Slovenia | info@artcomp.net
        </p>
      </div>
    </footer>
  );
}
