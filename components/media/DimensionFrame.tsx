import type { ReactNode } from "react";

export default function DimensionFrame({
  children,
  x,
  y,
  caption,
}: {
  children: ReactNode;
  x?: string;
  y?: string;
  caption?: string;
}) {
  return (
    <figure className="dimframe">
      {y ? (
        <div className="dim dim-y" aria-hidden="true">
          <i className="dim-rule" />
          <span>{y}</span>
          <i className="dim-rule" />
        </div>
      ) : (
        <span />
      )}
      <div>
        <div className="dim-photo">{children}</div>
        {x ? (
          <div className="dim dim-x" aria-hidden="true">
            <i className="dim-rule" />
            <span>{x}</span>
            <i className="dim-rule" />
          </div>
        ) : null}
        {caption ? <figcaption className="caption">{caption}</figcaption> : null}
      </div>
    </figure>
  );
}
