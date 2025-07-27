import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-8">
      {/* Navbar */}
      <header className="w-full max-w-6xl mx-auto flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold tracking-tight hover:text-green-400 transition">
          Alavita AI
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

        {/* Render Markdown posts */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-zinc-900 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-1">
                <Link href={`/blog/${post.slug}`} className="hover:text-green-400 transition">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-400 mb-2">{post.date}</p>
              <p className="text-gray-300">{post.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
