import './App.css'
import { useRef } from 'react'
import MapSvg from './components/MapSvg/MapSvg.tsx'

function App() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Ukrainian - english pairs of region names
  // const regionsMap = {
  //   Krym: "Крим",
  //   Vinnytska: "Вінницька",
  //   Volynska: "Волинська",
  //   Dnipropetrovska: "Дніпропетровська",
  //   Donetska: "Донецька",
  //   Zhytomyrska: "Житомирська",
  //   Zakarpatska: "Закарпатська",
  //   Zaporizka: "Запорізька",
  //   IvanoFrankivska: "Івано-Франківська",
  //   Kyivska: "Київська",
  //   Kirovohradska: "Кіровоградська",
  //   Luhanska: "Луганська",
  //   Lvivska: "Львівська",
  //   Mykolaivska: "Миколаївська",
  //   Odeska: "Одеська",
  //   Poltavska: "Полтавська",
  //   Rivnenska: "Рівненська",
  //   Sumska: "Сумська",
  //   Ternopilska: "Тернопільська",
  //   Kharkivska: "Харківська",
  //   Khersonska: "Херсонська",
  //   Khmelnytska: "Хмельницька",
  //   Cherkaska: "Черкаська",
  //   Chernivetska: "Чернівецька",
  //   Chernihivska: "Чернігівська",
  //   Sevastopilska: "Севастопольська"
  // };

  const handleDisabled = (event: React.MouseEvent<SVGPathElement>) => {
    const path = event.currentTarget;

    if (!path.classList.contains('disabled_region')) {
      path.classList.add('disabled_region');
    }

  }

  return (
    <>
      <div>
        <MapSvg ref={svgRef} handleClick={handleDisabled} />
      </div>
    </>
  )
}

export default App
