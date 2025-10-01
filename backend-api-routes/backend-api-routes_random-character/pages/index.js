import useSWR from "swr";
import styled from "styled-components";

export default function HomePage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, isLoading } = useSWR(`/api/random-character`, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) return;
  /*  console.log("the data: ", data); */

  return (
    <>
      <h1>Random Character!</h1>
      <p>
        {data.firstName}
        {data.lastName} is {data.age} years old.
      </p>
      <p>
        Their <strong>twitter username</strong> is{" "}
        <strong> {data.twitter}</strong> and their <strong>GeoHash</strong> is{" "}
        <strong>{data.geoHash}</strong>, whatever that is!
      </p>
    </>
  );
}
