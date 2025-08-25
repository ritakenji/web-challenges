export default function App() {
  function handleClick() {
    console.log("You clicked me!");
  }

  return (
    <Button
      text={"Click meee pleaseee, click meeeee!"}
      color={"#41acaf"}
      color2={"#752c71"}
      onButton={handleClick}
    />
  );
}

function Button({ color, disabled, text, color2, onButton }) {
  return (
    <>
      <button
        type="button"
        style={{ color: color, backgroundColor: color2 }}
        disabled={disabled}
        onClick={onButton}
      >
        {text}
      </button>
    </>
  );
}
