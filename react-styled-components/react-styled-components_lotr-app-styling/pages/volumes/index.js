/* 

!!! CONTINUATION OF PREVIOUS LOTR'S CHALLENGE (NEXTJS-DYNAMIC-ROUTES), CODE BELOW WRITTEN BY ME !!!

*/

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { introduction, volumes } from "@/lib/data";
import { useRouter } from "next/router";
import styled from "styled-components";

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
      <Main>
        <Title>The Lord of The Rings</Title>
        <p>{introduction}</p>

        <SubTitle>All Volumes</SubTitle>
        <List>
          {volumes.map((volume, index) => (
            <ListIem key={index}>
              <ListLink href={`/volumes/${volume.slug.toLocaleLowerCase()}`}>
                <ListImg
                  src={volume.cover}
                  alt={`Cover image of ${volume.title}`}
                  width={80}
                  height={130}
                ></ListImg>
                {volume.title}
              </ListLink>
            </ListIem>
          ))}
        </List>
        <Button onClick={handleRandomVol}>Go to random volume</Button>
      </Main>
    </>
  );
}

const Main = styled.main`
  margin: 40px 20px 30px 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const SubTitle = styled.h2`
  font-size: 2em;
  margin: 45px 0 15px 0;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ListIem = styled.li`
  width: 30%;
`;
const ListLink = styled(Link)`
  display: flex;
  margin: 0 9px 0 9px;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 12px;
`;

const ListImg = styled(Image)`
  margin-bottom: 10px;
  box-shadow: 0px 5px 11px -3px rgba(0, 0, 0, 0.5);
`;

const Button = styled.button`
  margin-top: 20px;
  background-image: linear-gradient(to bottom, #fff, #d7d1b1);
  border: 0 solid #e5e7eb;
  border-radius: 0.5rem;
  color: inherit;
  cursor: pointer;
  font-weight: 700;
  padding: 15px;
  box-shadow: -6px 8px 10px rgba(81, 41, 10, 0.1),
    0px 2px 2px rgba(81, 41, 10, 0.2);
`;
