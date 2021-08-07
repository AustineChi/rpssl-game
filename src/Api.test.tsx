import { render, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { play } from "./Api";

jest.mock("./api");
const mockData = {
  id: 4,
  name: "lizard",
};

test("calls play function with proper params", async () => {
  const { getByAltText } = render(<App />);
  const choiceItem = getByAltText(mockData.name);

  await act(async () => {
    fireEvent.click(choiceItem);
  });

  expect(play).toHaveBeenCalledTimes(1);
  expect(play).toHaveBeenCalledWith(mockData.id);
});
