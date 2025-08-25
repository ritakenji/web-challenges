export default function App() {
  return (
    <section>
      <Greet name={"Gimena"} isCoach={true} />
      <Greet name={"Bob"} />
    </section>
  );
}

function Greet({ name, isCoach }) {
  return <h1>Hello, {isCoach ? "Coach" : name}</h1>;
}
