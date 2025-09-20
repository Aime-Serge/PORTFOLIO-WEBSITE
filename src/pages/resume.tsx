import MainLayout from '@/components/layout/MainLayout';

export default function ResumePage() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-semibold mb-4">📄 Resume</h1>

      <section className="space-y-6 text-sm text-gray-800">
        <div>
          <h2 className="font-semibold text-gray-700">🧠 Core Skills</h2>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>Programming: Python, JavaScript, TypeScript</li>
            <li>Web Development: React, Next.js, TailwindCSS, Redux</li>
            <li>Tools: GitHub, Figma, Vercel, Supabase</li>
            <li>Backend Familiarity: Express.js, GraphQL, REST, Firebase</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-gray-700">🎓 Certifications</h2>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>ALX ProDev Front-End Certificate (2025)</li>
            <li>Professional Foundations by ALX & MCF</li>
            <li>AI Starter Kit by ALX AI</li>
            <li>TME EDU Certificate of Leadership & Tutoring</li>
            <li>IEE Rwanda TAP II Teaching Assistantship (CPDs)</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-gray-700">💡 Highlights</h2>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>Developed full-stack projects & admin portals with dynamic data</li>
            <li>Tutored other Teaching Assistants during CPDs</li>
            <li>Designed and led research and case study projects independently</li>
          </ul>
        </div>
      </section>

      <div className="mt-6">
        <a
          href="/uploads/Aime%20Serge%20UKOBIZABA.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline text-sm"
        >
          Download full PDF resume →
        </a>
      </div>
    </MainLayout>
  );
}
