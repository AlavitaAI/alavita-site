import Link from "next/link";

export default function Home() {
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

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center mt-10">
        <p className="text-center text-sm text-green-400 mb-4">Soon • Launching in August 2025</p>

        <div className="bg-gradient-to-b from-green-700 to-black/80 rounded-3xl shadow-xl p-10 w-full max-w-xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Alavita – Your AI Health & Wellness Coach</h1>
          <p className="text-lg text-gray-200 mb-6">
            Get personalized workouts, nutrition, and recovery plans daily—powered by AI.
          </p>

          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="name@email.com"
              className="px-4 py-3 rounded-md w-full sm:w-auto bg-black border border-gray-600 text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
            >
              Join
            </button>
          </form>
        </div>

        {/* Mockup image */}
        <div className="mt-16">
          <img src="/mockup.png" alt="Alavita app preview" className="w-72 sm:w-96 mx-auto" />
        </div>
      </section>
    </main>
  );
}
