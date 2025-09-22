import Link from "next/link";

export default function Header(){
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">Aime Serge UKOBIZABA— Portfolio</Link>
        <div className="space-x-4 text-sm">
          <Link href="/projects"className="hover:underline">Projects</Link>
          <Link href="/research" className="hover:underline">Research</Link>
          <Link href="/resume" className="hover:underline">Resume</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/login" className="ml-4 px-3 py-1 border rounded text-sm">Admin</Link>
        </div>
      </div>
    </header>
  );
}
