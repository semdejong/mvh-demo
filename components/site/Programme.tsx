export default function Programme({ rows }: { rows: { k: string; v: string }[] }) {
  return (
    <ul className="programme">
      {rows.map((row) => (
        <li key={row.k}>
          <span className="mono">{row.k}</span>
          <span>{row.v}</span>
        </li>
      ))}
    </ul>
  );
}
