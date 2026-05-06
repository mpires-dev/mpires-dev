import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Matheus Pires. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm text-gray-400">
          <Link
            href="https://github.com/theoxys"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/matheusfpires"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/api/resume"
            className="hover:text-primary transition-colors"
          >
            Resume PDF
          </Link>
        </div>
      </div>
    </footer>
  );
}
