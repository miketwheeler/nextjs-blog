import Head from "next/head";
import Link from "next/link";
import { blogPosts } from "../lib/data";
// import { format, parseISO, add } from "../lib/date";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-4">
        {blogPosts.map((item) => (
          <BlogListItem key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}

function BlogListItem({ slug, title, date, content }) {
  return (
    <div className="border border-gray-200 shadow hover:shadow-md hover:border-gray-300 transition duration:200 ease-in rounded-md p-4">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="font-bold">{title}</a>
        </Link>
      </div>
      <div className="text-gray-600 text-xs">{date}</div>
      <div>{content}</div>
    </div>
  );
}
