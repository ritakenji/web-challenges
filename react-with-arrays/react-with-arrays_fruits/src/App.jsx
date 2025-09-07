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
    {
      id: 1342,
      name: "🍋 Lemon",
      color: "yellow",
    },
    {
      id: 1343,
      name: "🍉 Watermellon",
      color: "red",
    },
    {
      id: 1344,
      name: "🍈 Melon",
      color: "green",
    },
    {
      id: 1345,
      name: "🍇 Grape",
      color: "purple",
    },
  ];

  return (
    <div className="app">
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <Card id={fruit.id} name={fruit.name} color={fruit.color} />
          </li>
        ))}
      </ul>
    </div>
  );
}
