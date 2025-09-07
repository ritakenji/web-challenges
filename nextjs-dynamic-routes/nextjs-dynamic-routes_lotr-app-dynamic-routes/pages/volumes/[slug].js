import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data";

/* ToDO - dynamic routing
        1. grab the slug using useRoute 
        2. search in volumes (data.js) the data of the slug we want to display ()
        3. 

    */

export default function VolumeDetail() {
  return (
    <>
      <Head>
        <title>The Fellowship of The Ring</title>
      </Head>
      <main>
        <Link href={`/`}>← All Volumes</Link>
        const router = useRouter();
        
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
        <Image
          src={"/images/the-fellowship-of-the-ring.png"}
          alt={volumes[0].title}
          width={140}
          height={230}
        />
        <br />
        <button>
          <Link href={`/volumes/the-two-towers`}>Next Volume →</Link>
        </button>
      </main>
    </>
  );
}
