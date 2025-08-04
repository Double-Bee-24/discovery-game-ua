import './App.css';
import { useRef, useState } from 'react';
import MapSvg from './components/MapSvg/MapSvg.tsx';
import PlayButton from './components/PlayButton/PlayButton.tsx';
import { REGIONS_MAP } from './constants/regions.ts';
import { INITIAL_GAME_STATE } from './constants/initialGameState.ts';
import { pickRandom } from './utils/array.utils.ts';

const lang = 'ua';

function App() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

  const handleStartGame = (): void => {
    // Make sure game doesnt't resets by next click of a start button
    if (gameState.isGameStarted) {
      return;
    }

    const regionName =
      lang === 'ua'
        ? REGIONS_MAP[gameState.regionToGuess]
        : gameState.regionToGuess;

    setGameState(prev => ({
      ...prev,
      isGameStarted: true,
      // regionToGuess: randomRegion,
      quizText: `Де знаходиться ${regionName} область ?`,
    }));
  };

  const handlePlayGame = (event: React.MouseEvent<SVGPathElement>): void => {
    const path = event.currentTarget;
    const clickedRegion = path.className.baseVal.split(' ')[1]; // baseVal = 'region Sumska', for example

    console.log(clickedRegion, gameState.regionToGuess);

    if (clickedRegion !== gameState.regionToGuess) {
      return;
    }

    setGameState(prev => {
      const updatedGuessed = [...prev.guessedRegions, clickedRegion];
      const updatedNotGuessed = [
        ...prev.notGuessedRegions.filter(region => region !== clickedRegion),
      ];

      if (updatedNotGuessed.length === 0) {
        return {
          ...prev,
          notGuessedRegions: [],
          guessedRegions: updatedGuessed, isGameStarted: false,
          quizText: 'Вітаємо! Ви завершили гру!',
        }
      }

      const randomRegion = pickRandom(updatedNotGuessed);

      const regionName =
        lang === 'ua' ? REGIONS_MAP[randomRegion] : randomRegion;
      const updatedText = `Де знаходиться ${regionName} область ?`;

      return {
        ...prev,
        quizText: updatedText,
        guessedRegions: updatedGuessed,
        notGuessedRegions: updatedNotGuessed,
        regionToGuess: randomRegion
      };
    });
  };

  return (
    <>
      <div>
        <p>{gameState.quizText}</p>
        <PlayButton handleClick={handleStartGame} />
        <MapSvg
          svgRef={svgRef}
          handleClick={handlePlayGame}
          disabledRegions={gameState.guessedRegions}
        />
      </div>
    </>
  );
}

export default App;
