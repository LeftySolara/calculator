type NumberButtonProps = {
  value: number;
  handleClick: (value: string) => void;
};

const NumberButton = (props: NumberButtonProps) => {
  const { value, handleClick } = props;
  return (
    <button type="button" onClick={() => handleClick(value.toString())}>
      {value.toString()}
    </button>
  );
};

export default NumberButton;
