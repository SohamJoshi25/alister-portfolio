import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alister Augustine | Storyteller & Journalist",
  description:
    "Portfolio of Alister Augustine — journalist, storyteller, and narrative thinker."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="border-b g-neutral-50 text-neutral-900 antialiased min-h-screen flex flex-col"  style={{
        backgroundImage: "url('/newspaper_texture.jpg')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "top"
      }} >
        {/* Navbar */}
        <header className="border-b border-neutral-200  bg-white/90 backdrop-blur-xs">
        <nav className="mx-auto max-w-7xl p-10 flex items-center justify-between">
          
          {/* Identity */}
          <Link
            href="/"
            className="text-lg md:text-2xl font-medium tracking-tighter"
          >
            Alister Augustine
          </Link>

          {/* Navigation */}
          <ul className="flex items-center gap-8 text-sm md:text-base text-neutral-600">
            {[
              { label: "Articles", href: "/articles" },
              { label: "Assignments", href: "/assignments" },
              { label: "Blogs", href: "/blogs" },
              { label: "About", href: "/aboutme" }
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="
                    relative 
                    transition-colors 
                    hover:text-neutral-900
                    after:absolute after:-bottom-1 after:left-0
                    after:h-px after:w-0 after:bg-blue-900
                    after:transition-all
                    hover:after:w-full
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

        </nav>
      </header>


        {/* Main Content */}
        <main className="px-auto px-6 py-20 grow bg-white/88" >
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-neutral-200 bg-white/90 backdrop-blur-xs">
          <div className="mx-auto max-w-5xl px-6 py-14">
            <p className="text-neutral-700 mb-6 max-w-xl text-md">
              I’m always open to conversations around journalism, storytelling, collaborations, and meaningful ideas.
            </p>

            <div className="flex gap-6 text-sm">
              <a
                href="mailto:alisteraugustine01@gmail.com"
                className="underline underline-offset-4 hover:text-neutral-500"
                target="_blank"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/alister-augustine-2610382bb/"
                className="underline underline-offset-4 hover:text-neutral-500"
                target="_blank"
              >
                Linkedin
              </a>
              <a
                href="#"
                className="underline underline-offset-4 hover:text-neutral-500"
                target="_blank"
              >
                Twitter / X
              </a>
 
            </div>

            <p className="mt-10 text-xs text-neutral-500">
              © {new Date().getFullYear()} Alister Augustine
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
