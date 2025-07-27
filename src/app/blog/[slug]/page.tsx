import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-green-400 underline mb-6 inline-block">← Back to Blog</Link>
        <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
        <p className="text-sm text-gray-400 mb-8">{data.date}</p>
        <div
          className="prose prose-invert max-w-none text-white"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </main>
  );
}
