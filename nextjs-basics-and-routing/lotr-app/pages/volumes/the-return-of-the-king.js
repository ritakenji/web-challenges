import Head from "next/head";
import Link from "next/link";
import { volumes } from "@/lib/data";

export default function TheReturnOfTheKing() {
  return (
    <>
      <Head>
        <title>The Return Of The King</title>
      </Head>
      <main>
        <Link href={`/`}>← All Volumes</Link>
        <h1>{volumes[2].title}</h1>
        <p>{volumes[2].description}</p>
        <ul>
          <li>
            {volumes[2].books[0].ordinal}: {volumes[2].books[0].title}
          </li>
          <li>
            {volumes[2].books[1].ordinal}: {volumes[2].books[1].title}
          </li>
        </ul>
        <button>
          <Link href={`/volumes/the-two-towers`}>← Previous Volume</Link>
        </button>
      </main>
    </>
  );
}
