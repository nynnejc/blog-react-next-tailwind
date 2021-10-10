import Link from "next/Link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto my-10 w-8/12">
      <header>
        <h1 className="text-6xl font-bold text-center hover:text-pink-200">
          Kære Computer
        </h1>
        <nav className="my-4">
          <ul className="flex flex-row justify-center space-x-4">
            <li>
              <Link href="/">
                <a className="text-purple-900 hover:text-purple-400">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="text-purple-900 hover:text-purple-400">About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
