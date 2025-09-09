import "../css/SplitCard.css";

function SplitCard({ name, info }) {
  const handleClick = () => alert(name + " Selected");

  return (
    <div className="split-card">
      <div className="name-and-info">
        <div className="split-name">
          <h2>{name}</h2>
        </div>
        <div className="split-info">
          <h3>{info}</h3>
        </div>
      </div>
      <button className="split-btn" onClick={handleClick}>
        Select
      </button>
    </div>
  );
}

export default SplitCard;
