import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Aime Serge UKOBIZABA
        </h1>
        <p className="text-gray-700 text-lg font-medium">
          CS Undergraduate Candidate • Software Developer • Educator • Storyteller
        </p>
        <p className="text-sm text-gray-500">
          Applying to U.S. Ivy League universities for Computer Science · Rwanda · ALX Fellow · TAP II TA
        </p>
      </section>

      {/* About Me / Personal Brand Pitch */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">🙋‍♂️ About Me</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          I’m a purpose-driven Rwandan learner, educator, and developer aspiring to pursue an undergraduate degree in
          Computer Science at a top U.S. university. My portfolio reflects not just what I’ve built, but how I think:
          technically, ethically, and impactfully.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mt-2">
          My journey bridges self-learning, peer tutoring, technical exploration, and community contribution. I’ve led workshops,
          built dynamic web systems, published case studies, and mentored fellow TAs — all with the mindset of #DoHardThings.
        </p>
      </section>

      {/* Video Introduction */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">🎥 Portfolio Demo Video</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="rounded w-full"
            src="https://www.youtube.com/embed/cFeNw9i7swE"
            title="Portfolio Overview Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Academic Journey */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">🎓 Academic & Leadership Profile</h2>
        <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
          <li>IEE Rwanda TAP II Teaching Assistant · Facilitated CPD tech sessions</li>
          <li>ALX ProDev Software Engineering Fellow · Frontend + AI programs</li>
          <li>Certified in Leadership through John Maxwell’s Beyond Success</li>
          <li>Trained in professional collaboration, agile workflows, tech mentorship</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">🛠️ Projects & Case Studies</h2>
        <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
          <li><strong>Online Store Platform</strong> – Admin dashboard + mock API + frontend integration</li>
          <li><strong>MK Scholars</strong> – Education org portal with blogs + case study</li>
          <li><strong>Winning4Tours & IgloTours</strong> – Tourism website redesigns</li>
          <li><strong>ALX GraphQL + PWA</strong> – Modern web stack project modules</li>
        </ul>
        <Link href="/projects" className="text-blue-600 underline text-sm mt-2 block">
          View full project archive →
        </Link>
      </section>

      {/* Research & Publications */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">📚 Research & Publications</h2>
        <p className="text-sm text-gray-700 mb-2">
          This portfolio includes publications, PDFs, and case studies written, documented, and designed by me.
        </p>
        <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
          <li>Beyond Success: Leadership journey & impact case study</li>
          <li>IEE Rwanda: TA-led CPD effectiveness & training narrative</li>
          <li>ALX Projects: Reflective documentation of GraphQL & PWA builds</li>
        </ul>
        <Link href="/research" className="text-blue-600 underline text-sm mt-2 block">
          Browse research →
        </Link>
      </section>

      {/* Navigation Shortcuts */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">🔗 Explore Portfolio</h2>
        <ul className="list-disc ml-5 text-blue-600 text-sm space-y-1">
          <li><Link href="/resume" className="underline">Resume & Skills Overview</Link></li>
          <li><Link href="/projects" className="underline">Full Project Listing</Link></li>
          <li><Link href="/blogs" className="underline">Technical Blogs</Link></li>
          <li><Link href="/research" className="underline">Research Publications</Link></li>
          <li><Link href="/contact" className="underline">Get in Touch</Link></li>
        </ul>
      </section>

      <footer className="text-xs text-gray-400 mt-10 text-center">
        Designed & Developed by Aime Serge UKOBIZABA · Built with Next.js, Tailwind, Redux
      </footer>
    </MainLayout>
  );
}
