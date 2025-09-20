import MainLayout from '@/components/layout/MainLayout';

export default function ContactPage() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-semibold mb-4">📨 Contact</h1>
      <p className="text-gray-700 mb-2">
        I’m always open to opportunities, collaborations, or just a thoughtful chat about Computer Science, software engineering, or research.
      </p>

      <div className="mt-4 space-y-3 text-sm text-blue-600">
        <div>
          📧 Email:{" "}
          <a href="mailto:aimeserge512@gmail.com" className="underline">
            aimeserge512@gmail.com
          </a>
        </div>

        <div>
          💼 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/aime-serge-ukobizaba-945705347/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            linkedin.com/in/aime-serge-ukobizaba
          </a>
        </div>

        <div>
          🐦 Twitter/X:{" "}
          <a
            href="https://twitter.com/AimeSerge_Uk60"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            @AimeSerge_Uk60
          </a>
        </div>

        <div>
          📄 Resume PDF:{" "}
          <a
            href="/uploads/Aime%20Serge%20UKOBIZABA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            View resume
          </a>
        </div>
      </div>
    </MainLayout>
  );
}
