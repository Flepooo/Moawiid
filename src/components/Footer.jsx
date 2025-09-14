// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto text-center p-4">
        <p>© {new Date().getFullYear()} Moawiid. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
