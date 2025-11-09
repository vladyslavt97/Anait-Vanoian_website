"use client";

export default function Footer() {
  return (
    <footer className="mt-14 w-full border-t border-white/10 bg-[#050505]/80 py-6 text-center text-[0.65rem] uppercase tracking-[0.35em] text-white/60 backdrop-blur-xl">
      <p>© {new Date().getFullYear()} Anait Vanoian • Violinist</p>
    </footer>
  );
}
