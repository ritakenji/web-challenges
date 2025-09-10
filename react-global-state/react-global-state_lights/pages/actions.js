import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ handleTurnOff, handleTurnOn }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions handleTurnOff={handleTurnOff} handleTurnOn={handleTurnOn} />
    </>
  );
}
