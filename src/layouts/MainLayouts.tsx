import { Outlet } from "react-router-dom";
import Header from "../component/header/Header";

export default function MainLayout() {
  return (
    <>
      <Header />

      <main className="py-24 container mx-auto">
        <Outlet />
      </main>

      <footer>
        <div className="bg-red-900 text-white text-center p-3">&copy; 2026 Universitas Harkat Negeri</div>
      </footer>
    </>
  );
}