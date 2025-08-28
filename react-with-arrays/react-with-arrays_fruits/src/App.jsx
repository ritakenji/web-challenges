import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 133,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍓 Strawberry",
      color: "red",
    },
    {
      id: 1339,
      name: "🥝 Kiwi",
      color: "green",
    },
    {
      id: 1340,
      name: "🍑 Peach",
      color: "orange",
    },
    {
      id: 1341,
      name: "🫐 Blueberry",
      color: "blue",
    },
  ];

  return (
    <div className="app">
      <Card name="🍌 banana" />
    </div>
  );
}
