import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";

/* ToDO - dynamic routing
        1. grab the slug using useRoute 
        2. depending on the slug we want the info to display
        3. find in volumes the data of the slug

    */

export default function VolumeDetail() {
  //grab slug
  const router = useRouter();
  /*   console.log("router", router); */
  const { slug } = router.query;
  /*   console.log("slug", slug); */

  //where to find the info --> in volumes
  /* console.log('volumes', volumes); */

  if (!slug) {
    return null;
  }

  //find the info depending on the slug (index)
  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  if (volumeIndex === -1) {
    return <h1>Page not found.</h1>;
  }

  let volume = volumes[volumeIndex];

  /* edge cases:

   volume name:   fellowship | 2towers  | return king
     nr volume:        1      |    2     |      3
       index:          0      |    1     |      2
  ------------------------------------------------------------------------------------------
  So:   current index: 1 -> next index: 2  | current index: 2 -> next index: 0 (loop around)
        current volum: 2 -> next volum: 3  | current volum: 3 -> next volum: 1 (loop around)
        ------------------------------------------------------------------------------------
        current index: 2 -> prev index: 1  | current index: 0 -> prev index: 2 (loop around)
        current volum: 3 -> prev volum: 2  | current volum: 1 -> prev volum: 3 (loop around)

  */

  let nextIndex = volumes.length - 1 === volumeIndex ? 0 : volumeIndex + 1;
  let prevIndex = volumeIndex === 0 ? volumes.length - 1 : volumeIndex - 1;

  const nextVol = volumes[nextIndex];
  const prevVol = volumes[prevIndex];
  const { title, description, cover, books } = volume;
  /* ↑↑↑↑ so i dont have to write volume.title, volume.description, etc */
  /*  console.log("volume: ", volume); */

  function handlePrevious() {
    router.push(`/volumes/${prevVol.slug}`);
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Link href={`/volumes`}>← All Volumes</Link>
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
          {books.map(({ ordinal, title }) => (
            <li key={title}>
              {ordinal}: <strong>{title}</strong>
            </li>
          ))}
        </ul>
        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />

        <br />

        {/* true of false && Element to render if true */}
        {/* if volumeIndex is 0 aka false then... */}

        {!!volumeIndex && (
          <button onClick={handlePrevious}>
            {" "}
            ← Previous Volume: {prevVol.title}
          </button>
        )}
        {!!nextIndex && (
          <Link href={`/volumes/${nextVol.slug}`}>
            Next Volume: {nextVol.title} →
          </Link>
        )}
      </main>
    </>
  );
}
