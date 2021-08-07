import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChoiceCard from "./index";
import mockData from "../../mock";

describe("<ChoiceCard />", () => {
  const data = mockData.playOptions[1];
  const handleClick = jest.fn();

  beforeEach(cleanup);

  test("Renders ChoiceCard without crashing", () => {
    render(<ChoiceCard data={data} handleClick={handleClick} />);
  });

  test("should render ChoiceCard image and name", () => {
    const { getByText, getByAltText } = render(
      <ChoiceCard data={data} handleClick={handleClick} />
    );

    const name = getByText(data.name);
    const image = getByAltText(data.name);

    expect(name).toBeVisible();
    expect(image).toBeVisible();
  });
});
