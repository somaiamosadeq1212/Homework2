export default function Summary({ totalMovie, totalWatched, totalUnwatched }) {
    return (
      <div className="summaryWrap">
        <div className="summary">
          <SummaryCard label="Total Movies" value={totalMovie} />
          <SummaryCard label="Watched" value={totalWatched} />
          <SummaryCard label="Unwatched" value={totalUnwatched} />
        </div>
      </div>
    );
  }
  
  function SummaryCard({ label, value }) {
    return (
      <div className="summaryCard">
        <div className="summaryLabel">{label}</div>
        <div className="summaryValue">{value}</div>
      </div>
    );
  }
  