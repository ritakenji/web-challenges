export default function App() {
  return <Greet name={"Jordan"} />;
}

function Greet(props) {
  return <h1>Hello {props.name}</h1>;
}
