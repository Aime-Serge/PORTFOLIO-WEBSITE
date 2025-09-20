import LogoutButton from "@/components/auth/logoutButton";
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
        <h1 className="font-semibold">Admin</h1>
        <LogoutButton />
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
