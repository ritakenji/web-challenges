import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input // these props below are all passed on the component on index.js, therefore must be included here
      name={"nameOfGame"}
      labelText="Name of game"
      placeholder={"e.g. Dodelido"}
      value={"Hi"}
      onChange={() => {}}
      required={true}
    />
  );
  //const label = screen.getByLabelText("Name of game");
  const styledInput = screen.getByRole("textbox", { name: "Name of game" });
  //expect(label).toBeInTheDocument();
  expect(styledInput).toBeInTheDocument();
  expect(styledInput).toHaveAttribute("id", "nameOfGame");
  expect(styledInput).toHaveAttribute("name", "nameOfGame");
  expect(styledInput).toHaveAttribute("placeholder", "e.g. Dodelido");
  expect(styledInput).toHaveAttribute("type", "text");
  expect(styledInput).toHaveAttribute("value", "Hi");
  expect(styledInput).toBeRequired();
});

test("calls callback on every user input", async () => {
  const onChangeFunction = jest.fn();
  render(
    <Input
      name={"lol"}
      labelText={"Name of game"}
      onChange={onChangeFunction}
    />
  );
  expect(onChangeFunction).toHaveBeenCalledTimes(0); // theres no input on first render
  const input = screen.getByRole("textbox", { name: "Name of game" });
  const user = userEvent.setup();
  await user.type(input, "Test"); //could have written anything, ex: PutaQuePariu, then number below changes
  expect(onChangeFunction).toHaveBeenCalledTimes(4); // Test has 4 letters - PQP has 12 letters
});
