import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Whats Angelhair?</h2>
      <label htmlFor="input">Click to find out</label>
      <input
        id="input"
        placeholder="Am i supposed to have text here? I dont get the point of input here tbh"
      ></input>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/Angel_hair_(folklore)"
      >
        What the hell, what the hellie
      </a>
    </article>
  );
}
