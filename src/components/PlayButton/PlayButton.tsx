import './PlayButton.css';

const PlayButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button className="play_button" onClick={handleClick}>
      Грати
    </button>
  );
};

export default PlayButton;
