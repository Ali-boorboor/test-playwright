interface ResetButtonProps {
  handleReset: () => void;
}

const ResetButton = ({ handleReset }: ResetButtonProps) => {
  return (
    <button type="button" className="counter" onClick={handleReset}>
      Reset Count
    </button>
  );
};

export default ResetButton;
