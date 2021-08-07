import { useState } from "react";
import GameChoiceContainer from "./components/game-choice-container";
import PlayResult from "./components/play-result";
import Scoreboard from "./components/scoreboard";
import { ResultModel } from "./models/result.interface";
import appData from "./mock";
import { play } from "./Api";

import { Wrapper, Main, Header, ResetButton } from "./styles/main.styles";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<ResultModel | null>(null);
  const [allResults, updateAllResults] = useState<ResultModel[]>([]);

  const handleClick = async (val: number) => {
    setIsLoading(true);
    const res = await play(val);
    setResult(res);
    setIsLoading(false);
    updateAllResults((prev) => [res, ...prev]);
  };

  const playAgain: () => void = () => setResult(null);
  const reset: () => void = () => updateAllResults([]);

  return (
    <Wrapper>
      <Header>
        <h1>Play Game</h1>
      </Header>
      <Scoreboard scores={allResults} />
      <Main>
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : result ? (
          <PlayResult
            appData={appData.playOptions}
            playAgain={playAgain}
            result={result}
          />
        ) : (
          <GameChoiceContainer
            playOptions={appData.playOptions}
            handleClick={handleClick}
          />
        )}
        {allResults.length > 0 && (
          <ResetButton onClick={reset}>Reset Game</ResetButton>
        )}
      </Main>
    </Wrapper>
  );
}

export default App;
