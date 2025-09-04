import Head from "next/head";
import Link from "next/link";
import { volumes } from "@/lib/data";

export default function TheFellowShipOfTheRing() {
  console.log("the books: ", volumes[0].books);
  return (
    <>
      <Head>
        <title>The Fellowship of The Ring</title>
      </Head>
      <main>
        <Link href={`/`}>← All Volumes</Link>
        <h1>{volumes[0].title}</h1>
        <p>{volumes[0].description}</p>
        <ul>
          <li>
            {volumes[0].books[0].ordinal}: {volumes[0].books[0].title}
          </li>
          <li>
            {volumes[0].books[1].ordinal}: {volumes[0].books[1].title}
          </li>
        </ul>
        <button>
          <Link href={`/volumes/the-two-towers`}>Next Volume</Link>
        </button>
      </main>
    </>
  );
}
