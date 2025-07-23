export default function Blog() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Alavita Blog</h1>
        <p className="text-gray-300 mb-12">
          Product updates, behind-the-scenes, and our journey building Alavita.
        </p>

        {/* Placeholder posts */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">🚧 The Story of Alavita (Coming Soon)</h2>
            <p className="text-gray-400">Learn how it all started and where we’re headed.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
