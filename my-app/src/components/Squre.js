
export default function Square({ value, onSqureClick }) {
    return (
      <button className="squre" onClick={onSqureClick}>
        {value}
      </button>
    );
  }