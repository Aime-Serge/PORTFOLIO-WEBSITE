import AdminLayout from "@/components/layout/AdminLayout";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="space-y-3">
          <Link href="/admin/case-studies" className="text-blue-600">Manage Case Studies</Link>
          <Link href="/admin/case-studies/new" className="text-blue-600">Add Case Study</Link>
        </div>
      </div>
    </AdminLayout>
  );
}
