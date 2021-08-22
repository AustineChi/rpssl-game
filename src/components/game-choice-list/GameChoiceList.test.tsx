import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import GameChoiceList from "./index";
import mockData from "../../mock";

describe("<GameChoiceList />", () => {
  const handleClick = jest.fn();

  beforeEach(cleanup);

  test("Renders GameChoiceList without crashing", () => {
    render(
      <GameChoiceList
        playOptions={mockData.playOptions}
        handleClick={handleClick}
      />
    );
  });

  test("should display GameChoiceList items", () => {
    const { getByText, getByAltText } = render(
      <GameChoiceList
        playOptions={mockData.playOptions}
        handleClick={handleClick}
      />
    );

    const choiceOneName = getByText(mockData.playOptions[0].name);
    const choiceOneImage = getByAltText(mockData.playOptions[0].name);

    const choiceTwoName = getByText(mockData.playOptions[1].name);
    const choiceTwoImage = getByAltText(mockData.playOptions[1].name);

    const choiceThreeName = getByText(mockData.playOptions[2].name);
    const choiceThreeImage = getByAltText(mockData.playOptions[2].name);

    const choiceFourName = getByText(mockData.playOptions[3].name);
    const choiceFourImage = getByAltText(mockData.playOptions[3].name);

    expect(choiceOneName).toBeVisible();
    expect(choiceOneImage).toBeVisible();
    expect(choiceTwoName).toBeVisible();
    expect(choiceTwoImage).toBeVisible();
    expect(choiceThreeName).toBeVisible();
    expect(choiceThreeImage).toBeVisible();
    expect(choiceFourName).toBeVisible();
    expect(choiceFourImage).toBeVisible();
  });
});
