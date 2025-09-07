import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data";

export default function TheTwoTowers() {
  return (
    <>
      <Head>
        <title>The Two Towers</title>
      </Head>
      <main>
        <Link href={`/`}>← All Volumes</Link>
        <h1>{volumes[1].title}</h1>
        <p>{volumes[1].description}</p>
        <ul>
          <li>
            {volumes[1].books[0].ordinal}: {volumes[1].books[0].title}
          </li>
          <li>
            {volumes[1].books[1].ordinal}: {volumes[1].books[1].title}
          </li>
        </ul>
        <Image
          src={"/images/the-two-towers.png"}
          alt={volumes[1].title}
          width={140}
          height={230}
        />
        <br />
        <button>
          <Link href={`/volumes/the-fellowship-of-the-ring`}>
            ← Previous Volume
          </Link>
        </button>
        {"   "}
        <button>
          <Link href={`/volumes/the-return-of-the-king`}>Next Volume →</Link>
        </button>
      </main>
    </>
  );
}
