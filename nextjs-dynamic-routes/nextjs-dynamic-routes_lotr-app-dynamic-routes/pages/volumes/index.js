index;

/* 

!!! CONTINUATION OF PREVIOUS LOTR'S CHALLENGE (NEXTJS-BASICS-AND-ROUTING), CODE BELOW WRITTEN BY ME !!!

*/

import Head from "next/head";
import Link from "next/link";
import { introduction } from "@/lib/data";
import { volumes } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>LOTR</title>
      </Head>
      <main>
        <h1>The Lord of The Rings</h1>
        <p>{introduction}</p>

        <h2>All Volumes</h2>
        <ul>
          {volumes.map((volume, index) => (
            <li key={index}>
              <Link href={`/volumes/${volume.slug.toLocaleLowerCase()}`}>
                {volume.title}
              </Link>{" "}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
