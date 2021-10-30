import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getAllPosts } from "../lib/data";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Kære Computer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-6">
        {posts.map((item) => (
          <BlogListItem key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        date: data.date.toISOString(),
        content,
        slug,
      })),
    },
  };
}

function BlogListItem({ slug, title, date, content }) {
  return (
    <div className="p-4 transition duration-500 ease-in-out bg-blue-50 hover:bg-purple-100">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="text-xl font-bold">{title}</a>
        </Link>
      </div>

      <div className="my-4 text-gray-600 text-s">
        {format(parseISO(date), "MMMM do, uuu")}
      </div>

      <div>{content}</div>
    </div>
  );
}
