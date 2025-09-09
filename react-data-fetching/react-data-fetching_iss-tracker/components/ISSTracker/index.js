import { useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
/* import { SWRConfig } from "swr"; */
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function ISSTracker() {
  /*   const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  }); */

  /* async function getISSCoords() {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setCoords({ longitude: data.longitude, latitude: data.latitude });
      }
    } catch (error) {
      console.error(error);
    }
  } */

  /* useEffect(() => {
    const timer = setInterval(() => {
      getISSCoords();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []); */

  const URL = "https://api.wheretheiss.at/v1/satellites/25544";
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <main>
      {/*  <SWRConfig value={{ fetcher }}> */}
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        /* onRefresh={getISSCoords} */
      />
      {/* </SWRConfig> */}
    </main>
  );
}
