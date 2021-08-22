import ChoiceCard from "../choice-card";
import { Container, Text } from "./GameChoiceList.styles";
import { ChoiceItemModel } from "../../models/choice.interface";

interface GameChoiceListProps {
  playOptions: ChoiceItemModel[];
  handleClick: (val: number) => Promise<void>;
}

const GameChoiceList: React.FC<GameChoiceListProps> = ({
  playOptions,
  handleClick,
}: GameChoiceListProps) => {
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

export default GameChoiceList;
