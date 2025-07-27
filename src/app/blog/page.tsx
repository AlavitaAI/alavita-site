import Link from "next/link";

export default function Blog() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-8">
      {/* Navbar */}
      <header className="w-full max-w-6xl mx-auto flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold tracking-tight hover:text-green-400 transition">
          Alavita 🪽
        </Link>
        <nav className="space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
          <Link href="/blog" className="text-gray-300 hover:text-white transition">Blog</Link>
        </nav>
      </header>

      {/* Blog Content */}
      <section className="max-w-4xl mx-auto mt-12">
        <h1 className="text-5xl font-bold mb-8">Alavita Blog</h1>
        <p className="text-gray-300 mb-12">
          Product updates, behind-the-scenes, and our journey building Alavita.
        </p>

        {/* Placeholder post */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">🚧 Coming Soon</h2>
            <p className="text-gray-400">Stay tuned for our first post.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
