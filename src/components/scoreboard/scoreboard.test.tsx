import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import GameChoiceContainer from "./index";

describe("<scoreboard />", () => {
  const scores = [
    {
      computer: 2,
      player: 3,
      results: "win",
    },
    {
      computer: 4,
      player: 4,
      results: "tie",
    },
    {
      computer: 5,
      player: 4,
      results: "lose",
    },
  ];

  beforeEach(cleanup);

  test("Renders scoreboard without crashing", () => {
    render(<GameChoiceContainer scores={scores} />);
  });

  test("should display scoreboard results", () => {
    const { getByText } = render(<GameChoiceContainer scores={scores} />);

    const resultOne = getByText(scores[0].results);
    const resultTwo = getByText(scores[1].results);
    const resultThree = getByText(scores[2].results);

    expect(resultOne).toBeVisible();
    expect(resultTwo).toBeVisible();
    expect(resultThree).toBeVisible();
  });
});
