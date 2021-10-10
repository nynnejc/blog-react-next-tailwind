import Head from "next/head";
import Link from "next/Link";
import { format, parseISO } from "date-fns";
import { blogPosts } from "../lib/data";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kære Computer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-6">
        {blogPosts.map((item) => (
          <BlogListItem key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
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
