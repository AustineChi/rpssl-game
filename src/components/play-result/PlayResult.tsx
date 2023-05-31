import ChoiceCard from "../choice-card";
import { Container, ScoreWrapper, HeaderText } from "./PlayResult.styles";
import { FlexContainer } from "../../styles/main.styles";
import { ResultModel } from "../../models/result.interface";
import { ChoiceItemModel } from "../../models/choice.interface";
import { getResultStatus } from "../../utils";

interface PlayResultProps {
  appData: ChoiceItemModel[];
  result: ResultModel;
  playAgain: () => void;
}

const PlayResult: React.FC<PlayResultProps> = ({
  appData,
  result,
  playAgain,
}: PlayResultProps) => {
  const player = appData.find((item) => item.id === result?.player);
  const computer = appData.find((item) => item.id === result?.computer);

  return (
    <Container>
      <FlexContainer column>
        <HeaderText>Player</HeaderText>
        <ChoiceCard
          data={player}
          status={getResultStatus(result?.results)?.player}
        />
      </FlexContainer>
      <ScoreWrapper>
        <h3>{result?.results}</h3>
        <button onClick={playAgain}>Play Again</button>
      </ScoreWrapper>
      <FlexContainer column>
        <HeaderText>Computer</HeaderText>
        <ChoiceCard
          data={computer}
          status={getResultStatus(result?.results)?.computer}
        />
      </FlexContainer>
    </Container>
  );
};

export default PlayResult;
