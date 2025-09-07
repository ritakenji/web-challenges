/* 

!!! CONTINUATION OF PREVIOUS LOTR'S CHALLENGE (NEXTJS-DYNAMIC-ROUTES), CODE BELOW WRITTEN BY ME !!!

*/

import Head from "next/head";
import Link from "next/link";
import { introduction, volumes } from "@/lib/data";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handleRandomVol() {
    const randomVol = getRandomElement(volumes);
    router.push(`/volumes/${randomVol.slug}`);
  }

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
        <button onClick={handleRandomVol}>Go to random volume</button>
      </main>
    </>
  );
}
