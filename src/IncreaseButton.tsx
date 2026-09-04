interface IncreaseButtonProps {
  handleIncrease: () => void;
}

const IncreaseButton = ({ handleIncrease }: IncreaseButtonProps) => {
  return (
    <button type="button" className="counter" onClick={handleIncrease}>
      Increase Count
    </button>
  );
};

export default IncreaseButton;
