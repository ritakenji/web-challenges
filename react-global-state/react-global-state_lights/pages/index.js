import Link from "../components/Link";

export default function HomePage({ lights }) {
  const numLights = 0;

  const numLightsOn = lights.filter((light) => light.isOn === true).length;
  console.log("is this correct", numLightsOn);

  return (
    <div>
      <h1>Home</h1>
      <p> {numLightsOn} light(s) are on.</p> {/* //{numLightsOn.length} */}
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
