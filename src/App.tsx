import './App.css';
import { useRef, useState } from 'react';
import MapSvg from './components/MapSvg/MapSvg.tsx';
import PlayButton from './components/PlayButton/PlayButton.tsx';
import { REGIONS_MAP } from './constants/regions.ts';
import { pickRandom } from './utils/array.utils.ts';

const lang = 'ua';

type RegionKey = keyof typeof REGIONS_MAP;

interface GameState {
  isGameStarted: boolean;
  quizText: string;
  guessedRegions: RegionKey[];
  notGuessedRegions: RegionKey[];
  regionToGuess: RegionKey;
}

// Think how to avoid as
const notGuessedRegions: RegionKey[] = Object.keys(REGIONS_MAP) as RegionKey[];

const INITIAL_GAME_STATE: GameState = {
  isGameStarted: false,
  quizText: 'Натисніть "Грати", щоб почати ⟶',
  guessedRegions: [],
  notGuessedRegions,
  regionToGuess: pickRandom(notGuessedRegions),
};

function App() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

  const handleStartGame = (): void => {
    if (gameState.isGameStarted) {
      return;
    }

    // const randomRegion = notGuessedRegions[Math.floor(Math.random() * notGuessedRegions.length)];
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

    if (clickedRegion === gameState.regionToGuess) {
      setGameState(prev => {
        const updatedGuessed = [...prev.guessedRegions, clickedRegion];
        const updatedNotGuessed = [
          ...prev.notGuessedRegions.filter(region => region !== clickedRegion),
        ];
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
    }
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
