export const TickerCellRenderer = ({ data }) => {
  return (
    data && (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <img
          src={`/finance/logos/${data.ticker}.png`}
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "32px",
          }}
          alt={`${data.name} logo`}
        />
        <b className="custom-ticker">{data.ticker}</b>
        <span className="ticker-name"> {data.name}</span>
      </div>
    )
  );
};
