export default function Title({ count }) {
  return (
    <h1 className="title">
      {count < 5 ? (
        <span>FANCY COUNTER</span>
      ) : (
        <span>
          LIMIT! BUY <b>PRO</b> for &gt;5
        </span>
      )}
    </h1>
  );
}
