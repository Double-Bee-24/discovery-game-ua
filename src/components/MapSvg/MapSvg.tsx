import './MapSvg.css';
import { PATHS } from './regionPaths';

const MapSvg = ({
  svgRef,
  handleClick,
  disabledRegions,
}: {
  svgRef: React.RefObject<SVGSVGElement | null>;
  handleClick: (event: React.MouseEvent<SVGPathElement>) => void;
  disabledRegions: Set<string>;
}) => {
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
      <g id="features">
        <path
          onClick={handleClick}
          className={`region Krym ${disabledRegions.has('Krym') ? 'disabled' : ''}`}
          d={PATHS.KRYM}
          id="UA43"
          name="Avtonomna Respublika Krym"
        ></path>
        <path
          onClick={handleClick}
          className={`region Vinnytska ${disabledRegions.has('Krym') ? 'disabled' : ''}`}
          d={PATHS.VINNYTSKA}
          id="UA05"
          name="Vinnytska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Volynska ${disabledRegions.has('Krym') ? 'disabled' : ''}`}
          d={PATHS.VOLYNSKA}
          id="UA07"
          name="Volynska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Dnipropetrovska ${disabledRegions.has('Krym') ? 'disabled' : ''}`}
          d={PATHS.DNIPROPETROVSKA}
          id="UA12"
          name="Dnipropetrovska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Donetska ${disabledRegions.has('Krym') ? 'disabled' : ''}`}
          d={PATHS.DONETSKA}
          id="UA14"
          name="Donetska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Zhytomyrska ${disabledRegions.has('Krym') ? 'disabled' : ''}`}
          d={PATHS.ZHYTOMYRSKA}
          id="UA18"
          name="Zhytomyrska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Zakarpatska ${disabledRegions.has('Krym') ? 'disabled' : ''}`}
          d={PATHS.ZAKARPATSKA}
          id="UA21"
          name="Zakarpatska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Zaporizka ${disabledRegions.has('Krym') ? 'disabled' : ''}`}
          d={PATHS.ZAPORIZKA}
          id="UA23"
          name="Zaporizka"
        ></path>
        <path
          onClick={handleClick}
          className={`region Ivano-Frankivska ${disabledRegions.has('Krym') ? 'disabled' : ''}`}
          d={PATHS.IVANO_FRANKIVSKA}
          id="UA26"
          name="Ivano-Frankivska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Kyivska ${disabledRegions.has('Krym') ? 'disabled' : ''}`}
          d={PATHS.KYIVSKA}
          id="UA30"
          name="Kyivska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Kirovohradska ${disabledRegions.has('Krym') ? 'disabled' : ''}`}
          d={PATHS.KIROVOHRADSKA}
          id="UA35"
          name="Kirovohradska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Luhanska ${disabledRegions.has('Krym') ? 'disabled' : ''}`}
          d={PATHS.LUHANSKA}
          id="UA09"
          name="Luhanska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Lvivska ${disabledRegions.has('Krym') ? 'disabled' : ''}`}
          d={PATHS.LVIVSKA}
          id="UA46"
          name="Lvivska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Mykolaivska ${disabledRegions.has('Krym') ? 'disabled' : ''}`}
          d={PATHS.MYKOLAIVSKA}
          id="UA48"
          name="Mykolaivska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Odeska ${disabledRegions.has('Krym') ? 'disabled' : ''}`}
          d={PATHS.ODESKA}
          id="UA51"
          name="Odeska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Poltavska ${disabledRegions.has('Krym') ? 'disabled' : ''}`}
          d={PATHS.POLTAVSKA}
          id="UA53"
          name="Poltavska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Rivnenska ${disabledRegions.has('Krym') ? 'disabled' : ''}`}
          d={PATHS.RIVNENSKA}
          id="UA56"
          name="Rivnenska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Sumska ${disabledRegions.has('Krym') ? 'disabled' : ''}`}
          d={PATHS.SUMSKA}
          id="UA59"
          name="Sumska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Ternopilska ${disabledRegions.has('Krym') ? 'disabled' : ''} `}
          d={PATHS.TERNOPILSKA}
          id="UA61"
          name="Ternopilska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Kharkivska ${disabledRegions.has('Krym') ? 'disabled' : ''} `}
          d={PATHS.KHARKIVSKA}
          id="UA63"
          name="Kharkivska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Khersonska ${disabledRegions.has('Krym') ? 'disabled' : ''} `}
          d={PATHS.KHERSONSKA}
          id="UA65"
          name="Khersonska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Khmelnytska ${disabledRegions.has('Krym') ? 'disabled' : ''} `}
          d={PATHS.KHMELNYTSKA}
          id="UA68"
          name="Khmelnytska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Cherkaska ${disabledRegions.has('Krym') ? 'disabled' : ''} `}
          d={PATHS.CHERKASKA}
          id="UA71"
          name="Cherkaska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Chernivetska ${disabledRegions.has('Krym') ? 'disabled' : ''} `}
          d={PATHS.CHERNIVETSKA}
          id="UA77"
          name="Chernivetska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Chernihivska ${disabledRegions.has('Krym') ? 'disabled' : ''} `}
          d={PATHS.CHERNIHIVSKA}
          id="UA74"
          name="Chernihivska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Kyiv ${disabledRegions.has('Krym') ? 'disabled' : ''} `}
          d={PATHS.KYIV}
          id="UA32"
          name="Kyivska"
        ></path>
        <path
          onClick={handleClick}
          className={`region Sevastopol ${disabledRegions.has('Krym') ? 'disabled' : ''} `}
          d={PATHS.SEVASTOPOL}
          id="UA40"
          name="Sevastopilska"
        ></path>
      </g>
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
