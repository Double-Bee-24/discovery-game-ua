import './MapSvg.css';
import { REGIONS } from './regionPaths';

const MapSvg = ({
  svgRef,
  handleClick,
  disabledRegions,
}: {
  svgRef: React.RefObject<SVGSVGElement | null>;
  handleClick: (event: React.MouseEvent<SVGPathElement>) => void;
  disabledRegions: Set<string>;
}) => {
  const pathElements = REGIONS.map(region => (
    <path
      className={`region ${region.key} ${disabledRegions.has(region.key) ? 'disabled' : ''}`.trim()}
      key={region.key}
      onClick={handleClick}
      d={region.path}
      id={region.id}
      name={region.name}
    />
  ));

  return (
    <svg
      ref={svgRef}
      baseProfile="tiny"
      fill="#6f9c76"
      height="669"
      stroke="#ffffff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth=".5"
      version="1.2"
      viewBox="0 0 1000 669"
      width="1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="features">{pathElements}</g>
      <g id="points">
        <circle
          className="44.78553817544005|23.038043834624432"
          cx="90.9"
          cy="610.1"
          id="0"
        ></circle>
        <circle
          className="47.978553371828326|32.049359242090034"
          cx="545.5"
          cy="376.5"
          id="1"
        ></circle>
        <circle
          className="51.96982236731367|39.25841156806253"
          cx="909.1"
          cy="63.2"
          id="2"
        ></circle>
      </g>
      <g id="label_points">
        <circle
          className="Avtonomna Respublika Krym"
          cx="651.6"
          cy="579.6"
          id="UA43"
        ></circle>
        <circle className="Vinnytska" cx="377.1" cy="307" id="UA05"></circle>
        <circle className="Volynska" cx="182.2" cy="126.2" id="UA07"></circle>
        <circle
          className="Dnipropetrovska"
          cx="654.6"
          cy="365.4"
          id="UA12"
        ></circle>
        <circle className="Donetska" cx="829.9" cy="372.1" id="UA14"></circle>
        <circle
          className="Zhytomyrska"
          cx="359.9"
          cy="168.9"
          id="UA18"
        ></circle>
        <circle className="Zakarpatska" cx="103" cy="342.8" id="UA21"></circle>
        <circle className="Zaporizka" cx="724.3" cy="427.8" id="UA23"></circle>
        <circle
          className="Ivano-Frankivska"
          cx="171.5"
          cy="320.4"
          id="UA26"
        ></circle>
        <circle className="Kyivska" cx="454.3" cy="233" id="UA30"></circle>
        <circle
          className="Kirovohradska"
          cx="562.9"
          cy="343.7"
          id="UA35"
        ></circle>
        <circle className="Luhanska" cx="895.2" cy="300.8" id="UA09"></circle>
        <circle className="Lvivska" cx="134.2" cy="240.8" id="UA46"></circle>
        <circle
          className="Mykolaivska"
          cx="533.1"
          cy="433.3"
          id="UA48"
        ></circle>
        <circle className="Odeska" cx="466.1" cy="450.5" id="UA51"></circle>
        <circle className="Poltavska" cx="634" cy="244" id="UA53"></circle>
        <circle className="Rivnenska" cx="271.7" cy="125.5" id="UA56"></circle>
        <circle className="Sumska" cx="630.9" cy="138.9" id="UA59"></circle>
        <circle className="Ternopilska" cx="221.9" cy="270" id="UA61"></circle>
        <circle className="Kharkivska" cx="768.7" cy="261.5" id="UA63"></circle>
        <circle className="Khersonska" cx="633.4" cy="458.9" id="UA65"></circle>
        <circle className="Khmelnytska" cx="288" cy="256" id="UA68"></circle>
        <circle className="Cherkaska" cx="524.1" cy="269.4" id="UA71"></circle>
        <circle
          className="Chernivetska"
          cx="238.2"
          cy="352.9"
          id="UA77"
        ></circle>
        <circle className="Chernihivska" cx="544.3" cy="113" id="UA74"></circle>
        <circle className="Kyivska" cx="469.9" cy="187.8" id="UA32"></circle>
        <circle
          className="Sevastopilska"
          cx="619.3"
          cy="624"
          id="UA40"
        ></circle>
      </g>
    </svg>
  );
};

export default MapSvg;
