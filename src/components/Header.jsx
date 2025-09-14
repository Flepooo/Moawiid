import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Moawiid</h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-gray-200">الرئيسية</Link>
          <Link to="/services" className="hover:text-gray-200">الخدمات</Link>
          <Link to="/contact" className="hover:text-gray-200">اتصل بنا</Link>
          <Link to="/login" className="hover:text-gray-200">دخول</Link>
        </nav>
      </div>
    </header>
  );
}
