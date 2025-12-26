// Tree.tsx

export default function Tree() {
  return (
    <figure className="tree-figure">
      <div className="star" />
      <div className="trunk" />

      <div className="tree">
        <div style={{ "--i": 1 } as React.CSSProperties} />
        <div style={{ "--i": 2 } as React.CSSProperties} />
        <div style={{ "--i": 3 } as React.CSSProperties} />
        <div style={{ "--i": 4 } as React.CSSProperties} />
      </div>

      <div className="lights" />
    </figure>
  );
}
