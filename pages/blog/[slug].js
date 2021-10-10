import Head from "next/head";
import { format, parseISO } from "date-fns";
import { blogPosts, getAllPosts } from "../../lib/data";

export default function BlogPage({ title, date, content }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="my-4 text-gray-600 text-md">
            {format(parseISO(date), "MMMM do, uuu")}
          </div>
          <div>{content}</div>
        </div>
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
  getAllPosts();
  return {
    paths: blogPosts.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}
