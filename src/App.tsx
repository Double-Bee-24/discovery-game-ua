import './App.css';
import { useRef, useState } from 'react';
import MapSvg from './components/MapSvg/MapSvg.tsx';
import PlayButton from './components/PlayButton/PlayButton.tsx';
import { REGIONS_MAP } from './constants/regions.ts';

function App() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const [quizText, setQuizText] = useState('Натисніть "Грати", щоб почати ⟶');
  const [notGuessedRegions, setNotGuessedRegions] = useState(
    Object.keys(REGIONS_MAP)
  );

  const [disabledRegions, setDisabledRegions] = useState<Set<string>>(
    new Set()
  );

  const handleDisabled = (event: React.MouseEvent<SVGPathElement>): void => {
    const path = event.currentTarget;

    if (!path.classList.contains('disabled_region')) {
      path.classList.add('disabled_region');
    }
  };

  const handlePlayGame = (): void => {
    // Get random region to guess
    const currentRegion =
      notGuessedRegions[Math.floor(Math.random() * notGuessedRegions.length)];

    setQuizText(`Де знаходиться ${currentRegion} область ?`);
  };

  return (
    <>
      <div>
        <p>{quizText}</p>
        <PlayButton handleClick={handlePlayGame} />
        <MapSvg
          svgRef={svgRef}
          handleClick={handleDisabled}
          disabledRegions={disabledRegions}
        />
      </div>
    </>
  );
}

export default App;
