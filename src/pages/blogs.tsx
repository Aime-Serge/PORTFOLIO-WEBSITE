import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store";
import { addBlog } from "@/store/slices/blogsSlice";

export default function BlogsPage() {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector((s: RootState) => s.blogs.items);

  function seedBlog() {
    const id = `blog-${Date.now()}`;
    dispatch(
      addBlog({
        id,
        title: "How I Built a Portfolio for Ivy CS Applications",
        content:
          "Short journal-style post that explains choices for structure, technologies, and storytelling for admissions.",
        createdAt: new Date().toISOString(),
      })
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Blog & Essays</h1>
        <button onClick={seedBlog} className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
          Seed Sample Post
        </button>
      </div>

      {blogs.length === 0 ? (
        <div className="p-6 bg-white rounded shadow">No blog posts yet. Seed one to preview.</div>
      ) : (
        <div className="space-y-4">
          {blogs.map((b) => (
            <article key={b.id} className="bg-white rounded shadow p-4">
              <h2 className="text-lg font-semibold">{b.title}</h2>
              <p className="text-sm text-gray-700 mt-2 line-clamp-4">{b.content}</p>
              <div className="mt-3 text-xs text-gray-500">{new Date(b.createdAt).toLocaleDateString()}</div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
