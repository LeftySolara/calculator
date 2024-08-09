/* ResultDisplay - Shows the result of the previous operation. */

type ResultDisplayProps = {
  value: string;
};

const ResultDisplay = (props: ResultDisplayProps) => {
  const { value } = props;

  return <div>{value}</div>;
};

export default ResultDisplay;
