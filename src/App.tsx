import './App.css'
import { useEffect } from 'react'
import MapSvg from './components/MapSvg/MapSvg.tsx'

function App() {

  useEffect(() => {
    const regions = document.querySelectorAll('path');

    for (const region of regions) {
      console.log(region.className.baseVal);
    }
  }, [])

  return (
    <>
      <div>
        <MapSvg />
      </div>
    </>
  )
}

export default App
