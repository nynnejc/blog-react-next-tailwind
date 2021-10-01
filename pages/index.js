import Head from "next/head";
import Link from "next/Link";
import { blogPosts } from "../lib/data";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kaere Computer Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Kaere Computer Blog</h1>
      </main>

      <div>
        {blogPosts.map((item) => (
          <div key={item.slug}>
            <div>
              <Link href={`/blog/${item.slug}`}>
                <a>{item.title}</a>
              </Link>
            </div>
            <div>{item.date}</div>
            <div>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
