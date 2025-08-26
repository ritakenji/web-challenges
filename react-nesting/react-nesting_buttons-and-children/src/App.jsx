import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>This is Button 1!</Button>
      <Button>Is this button 2? yesss</Button>
      <Button>Ah ok thenI am 3!</Button>
      <Button>And this is button 4 yay</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
