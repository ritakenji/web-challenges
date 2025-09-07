import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
import styled from "styled-components";

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
  const { title, description, cover, books, color } = volume;
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
      <Main>
        <LinkAllVol href={`/volumes`}>
          <Image
            src={"/images/icons/chevron-left.svg"}
            alt={`Go back to all volumes`}
            width={25}
            height={25}
          />
          All Volumes
        </LinkAllVol>
        <Title>{title}</Title>
        <p>{description}</p>

        <CenterSection $bgColor={color}>
          <List>
            {books.map(({ ordinal, title }) => (
              <li key={title}>
                <Ordinal>{ordinal}</Ordinal>
                <BookTitle>{title}</BookTitle>
              </li>
            ))}
          </List>
          <Image
            src={cover}
            alt={`Cover image of ${title}`}
            width={140}
            height={230}
          />
        </CenterSection>

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
          <NextLink href={`/volumes/${nextVol.slug}`}>
            <div>
              <TextNextVol>Next Volume</TextNextVol>
              <TextNextVolTitle>{nextVol.title}</TextNextVolTitle>
            </div>
            <Image
              src={"/images/icons/arrow-right.svg"}
              alt={`Next volume`}
              width={25}
              height={25}
            />
          </NextLink>
        )}
      </Main>
    </>
  );
}

const Main = styled.main`
  margin: 40px 20px 30px 20px;
`;

const LinkAllVol = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  color: inherit;
  font-weight: 300;
  font-size: 15px;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const CenterSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0px;
  margin-left: -30px;
  width: 100vw;
  background-color: ${(props) => props.$bgColor};
  color: var(--color-clouds);
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Ordinal = styled.p``;

const BookTitle = styled.p``;

const NextLink = styled(Link)`
  display: flex;
  align-items: center;
  text-align: right;
  gap: 5px;
  justify-content: flex-end;
  text-decoration: none;
  color: inherit;
`;

const TextNextVol = styled.p`
  margin-bottom: 0;
  margin-right: 5px;
  font-size: 13px;
  font-style: italic;
`;

const TextNextVolTitle = styled.p`
  margin-top: 0;
  margin-right: 5px;
  font-size: 13px;
  font-weight: 500;
`;
