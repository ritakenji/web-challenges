import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router";

/*  
- dynamic routing  
- /volumes/slug -> grab slug 
- depending on the slug we want the info to display
- find in volumes the data of the slug
*/

export default function VolumeDetail() {
  //grab slug
  const router = useRouter();
  console.log("router: ", router);
  const { slug } = router.query;
  console.log("slug: ", slug);

  // where to find the info -> in volumes
  console.log("volumes", volumes);

  //find info depening on the slug
  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (volumeIndex < 0) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
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
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}
