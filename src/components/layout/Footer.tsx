export default function Footer(){
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} Aime Serge UKOBIZABA. Built with Next.js · Tailwind · Redux.
      </div>
    </footer>
  );
}
