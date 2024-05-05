import React from "react";

export default function Footer() {
  return (
    <footer className="mb-4 px-4 text-center">
      <div>
        <div className="mb-2 block text-xs">Copyright &copy; 2024 Hafiz.</div>
        <p className="text-xs">
          <span className="font-semibold">About this website:</span> built with
          React & Next.js (App Router & Server Actions), TypeScript, Tailwind
          CSS, Framer Motion, Chadcn ui, Zod, React Email & Resend, Vercel hosting.
        </p>
      </div>
    </footer>
  );
}
