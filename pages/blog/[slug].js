import Head from "next/head";
import { blogPosts } from "../../lib/data";

export default function BlogPage({ title, date, content }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="border-b-2 border-gray-200 mb-4">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="text-gray-600 text-md">{date}</div>
        </div>
        <div className="">{content}</div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  console.log(context);
  const { params } = context;
  return {
    props: blogPosts.find((item) => item.slug === params.slug),
  };
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}
