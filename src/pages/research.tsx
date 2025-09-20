import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store";
import { addResearch } from "@/store/slices/researchSlice";

export default function ResearchPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((s: RootState) => s.research.items);

  function seedResearch() {
    const id = `res-${Date.now()}`;
    dispatch(
      addResearch({
        id,
        title: "TAP II — Technology-assisted Pedagogy (TA Reflections)",
        abstract:
          "Short abstract describing TA training outcomes and tech-driven CPD sessions. Suitable to show as research entry.",
        pdfUrl: "/uploads/BeyondSuccess_CaseStudy_AimeSergeUKOBIZABA.pdf",
        createdAt: new Date().toISOString(),
      })
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Research & Publications</h1>
        <button onClick={seedResearch} className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
          Seed Sample Research
        </button>
      </div>

      {items.length === 0 ? (
        <div className="p-6 bg-white rounded shadow">No research items yet — seed one to preview.</div>
      ) : (
        <div className="space-y-4">
          {items.map((r) => (
            <div key={r.id} className="bg-white rounded shadow p-4">
              <h2 className="text-lg font-semibold">{r.title}</h2>
              <p className="text-sm text-gray-700 mt-2 line-clamp-4">{r.abstract}</p>
              <div className="mt-3 text-xs text-gray-500">{new Date(r.createdAt).toLocaleDateString()}</div>
              {r.pdfUrl && (
                <div className="mt-3">
                  <a href={r.pdfUrl} target="_blank" rel="noreferrer" className="text-blue-600 text-sm">
                    View PDF
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
