import { Container, TextWrapper } from "./Scoreboard.styles";
import { ResultModel } from "../../models/result.interface";
import ScoreItem from "./ScoreItem";

interface ScoreboardProps {
  scores: ResultModel[];
}
const Scoreboard: React.FC<ScoreboardProps> = ({ scores }: ScoreboardProps) => {
  return (
    <Container>
      <TextWrapper>
        <span>You</span>
        <span>Result</span>
        <span>CPU</span>
      </TextWrapper>
      {scores &&
        scores
          .slice(0, 10)
          .map((score, index) => <ScoreItem key={index} score={score} />)}
      <div className="score-footer">
        <div>
          <h4>Total</h4>
          <p>{scores?.length}</p>
        </div>
        <div>
          <h4>Wins</h4>
          <p>{scores?.filter((score) => score?.results === "win")?.length}</p>
        </div>
        <div>
          <h4>Loss</h4>
          <p>{scores?.filter((score) => score?.results === "lose")?.length}</p>
        </div>
        <div>
          <h4>Tie</h4>
          <p>{scores?.filter((score) => score?.results === "tie")?.length}</p>
        </div>
      </div>
    </Container>
  );
};

export default Scoreboard;
