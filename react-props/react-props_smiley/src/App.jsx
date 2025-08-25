export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley({ isHappy }) {
  return <p>{isHappy ? "😃" : "😢"}</p>;
}
