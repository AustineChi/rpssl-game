import appData from "../../mock";

import { ResultModel } from "../../models/result.interface";
import { IconWrapper, Icon, Text } from "./Scoreboard.styles";

const ScoreItem: React.FC<{
  score: ResultModel;
}> = ({ score }) => {
  const player = appData.playOptions.find((item) => item.id === score?.player);
  const computer = appData.playOptions.find(
    (item) => item.id === score?.computer
  );
  return (
    <IconWrapper>
      <Icon src={player?.icon} alt={player?.name} />
      <Text>{score?.results}</Text>
      <Icon src={computer?.icon} alt={computer?.name} />
    </IconWrapper>
  );
};

export default ScoreItem;
