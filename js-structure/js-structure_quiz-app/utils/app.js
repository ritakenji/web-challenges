import Header from "./utils/header.js";
import Form from "./utils/form.js";
import CardList from "./utils/cardlist.js";

export default function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}

const headerBlock = Header();
const formBlock = Form();
const cardListBlock = CardList();