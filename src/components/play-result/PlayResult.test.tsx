import { render, cleanup, getByText } from "@testing-library/react";
import "@testing-library/jest-dom";
import PlayResult from "./index";
import mockData from "../../mock";

describe("<PlayResult />", () => {
  const result = {
    computer: 2,
    player: 3,
    results: "win",
  };
  const playAgain = jest.fn();
  const player = {
    id: 3,
    name: "scissors",
  };

  const computer = {
    id: 2,
    name: "paper",
  };

  const notSelectedOption = {
    id: 1,
    name: "rock",
  };

  beforeEach(cleanup);

  test("Renders PlayResult without crashing", () => {
    render(
      <PlayResult
        appData={mockData.playOptions}
        result={result}
        playAgain={playAgain}
      />
    );
  });

  test("should render only user and computer selected options", () => {
    const { getByText, queryByText } = render(
      <PlayResult
        appData={mockData.playOptions}
        result={result}
        playAgain={playAgain}
      />
    );
    const playerPicked = getByText(player.name);
    const computerPicked = getByText(computer.name);
    const notPicked = queryByText(notSelectedOption.name);

    expect(playerPicked).toBeVisible();
    expect(computerPicked).toBeVisible();
    expect(notPicked).not.toBeInTheDocument();
  });
});
