import './App.css';
import { useRef, useState } from 'react';
import MapSvg from './components/MapSvg/MapSvg.tsx';
import PlayButton from './components/PlayButton/PlayButton.tsx';

function App() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [quizText, setQuizText] = useState('Натисніть "Грати", щоб почати ⟶');

  // Ukrainian - english pairs of region names
  const regionsMap = {
    Krym: 'Крим',
    Vinnytska: 'Вінницька',
    Volynska: 'Волинська',
    Dnipropetrovska: 'Дніпропетровська',
    Donetska: 'Донецька',
    Zhytomyrska: 'Житомирська',
    Zakarpatska: 'Закарпатська',
    Zaporizka: 'Запорізька',
    IvanoFrankivska: 'Івано-Франківська',
    Kyivska: 'Київська',
    Kirovohradska: 'Кіровоградська',
    Luhanska: 'Луганська',
    Lvivska: 'Львівська',
    Mykolaivska: 'Миколаївська',
    Odeska: 'Одеська',
    Poltavska: 'Полтавська',
    Rivnenska: 'Рівненська',
    Sumska: 'Сумська',
    Ternopilska: 'Тернопільська',
    Kharkivska: 'Харківська',
    Khersonska: 'Херсонська',
    Khmelnytska: 'Хмельницька',
    Cherkaska: 'Черкаська',
    Chernivetska: 'Чернівецька',
    Chernihivska: 'Чернігівська',
    Sevastopilska: 'Севастопольська',
  };
  const notGuessedRegions = Object.keys(regionsMap);

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
        <MapSvg ref={svgRef} handleClick={handleDisabled} />
      </div>
    </>
  );
}

export default App;
