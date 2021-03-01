import Link from "next/link";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto w-9/12 my-8">
      <header>
        <h1 className="text-6xl font-bold text-center">My Blog</h1>
      </header>
      <nav className="my-4">
        <ul className="flex flex-row justify-center space-x-4">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
