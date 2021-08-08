import ChoiceCard from "../choice-card";
import { Container, Text } from "./GameChoiceContainer.styles";
import { ChoiceItemModel } from "../../models/choice.interface";

interface GameChoiceProps {
  playOptions: ChoiceItemModel[];
  handleClick: (val: number) => Promise<void>;
}

const GameChoiceContainer: React.FC<GameChoiceProps> = ({
  playOptions,
  handleClick,
}: GameChoiceProps) => {
  return (
    <>
      <Text>Select an option to play the game:</Text>
      <Container>
        {playOptions &&
          playOptions.map((data) => (
            <ChoiceCard key={data.id} data={data} handleClick={handleClick} />
          ))}
      </Container>
    </>
  );
};

export default GameChoiceContainer;
