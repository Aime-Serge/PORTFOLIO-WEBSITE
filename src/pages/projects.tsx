import Link from "next/link";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store";
import { addProject } from "@/store/slices/projectsSlice";

export default function ProjectsPage() {
  const dispatch = useAppDispatch();
  const caseStudies = useAppSelector((s: RootState) => s.caseStudies.items);
  const projects = useAppSelector((s: RootState) => s.projects.items);

  function seedProject() {
    const id = `proj-${Date.now()}`;
    dispatch(
      addProject({
        id,
        title: "Sample Portfolio Project — Image Search",
        description:
          "Client-side image search demo built with Next.js, TypeScript and Tailwind. Demonstrates API wiring and state management.",
        link: "",
        createdAt: new Date().toISOString(),
      })
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Projects & Case Studies</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Featured Case Studies</h2>
        {caseStudies.length === 0 ? (
          <div className="p-6 bg-white rounded shadow">No case studies yet.</div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <Link key={cs.id} href={`/projects/${cs.slug}`} className="block bg-white rounded-xl shadow p-5 border hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold">{cs.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">{cs.tagline || cs.summary}</p>
                  <div className="text-xs text-gray-500 mt-3">
                    <span>{cs.role}</span> • <span>{new Date(cs.createdAt).toLocaleDateString()}</span>
                  </div>

              </Link>
            ))}
          </div>
        )}
      </section>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Other Projects</h2>
          <button
            onClick={seedProject}
            className="text-sm px-3 py-1 rounded bg-blue-600 text-white"
          >
            Seed Sample Project
          </button>
        </div>

        {projects.length === 0 ? (
          <div className="p-6 bg-white rounded shadow">No projects yet. Click “Seed Sample Project”.</div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <div key={p.id} className="bg-white rounded-xl shadow p-5 border">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">{p.description}</p>
                <div className="mt-3 text-xs text-gray-500">{new Date(p.createdAt).toLocaleDateString()}</div>
                {p.link && (
                  <div className="mt-2">
                    <a href={p.link} target="_blank" rel="noreferrer" className="text-blue-600 text-sm">
                      Live demo
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
