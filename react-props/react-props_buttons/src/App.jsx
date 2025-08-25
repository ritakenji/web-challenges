export default function App() {
  return (
    <Button
      text={"Click meee pleaseee, click meeeee!"}
      color={"#41acaf"}
      color2={"#752c71"}
      disabled
    />
  );
}

function Button({ color, disabled, text, color2 }) {
  return (
    <>
      <button
        type="button"
        style={{ color: color, backgroundColor: color2 }}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
}
