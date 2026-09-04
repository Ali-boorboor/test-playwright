interface DecreaseButtonProps {
  handleDecrease: () => void;
}

const DecreaseButton = ({ handleDecrease }: DecreaseButtonProps) => {
  return (
    <button type="button" className="counter" onClick={handleDecrease}>
      Decrease Count
    </button>
  );
};

export default DecreaseButton;
