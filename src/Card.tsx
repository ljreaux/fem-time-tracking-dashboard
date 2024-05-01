import React from "react";

export interface CardDetails {
  title: string;
  timeframes: {
    daily: {
      previous: number;
      current: number;
    };
    weekly: {
      previous: number;
      current: number;
    };
    monthly: {
      previous: number;
      current: number;
    };
  };
}

export default function Card({
  title,
  timeframes,
  currentTimeFrame,
  backgroundColor,
}: CardDetails & {
  currentTimeFrame: "daily" | "weekly" | "monthly";
  backgroundColor: string;
}) {
  const displayString =
    currentTimeFrame === "daily"
      ? "Yesterday -"
      : currentTimeFrame === "weekly"
      ? "Last Week -"
      : "Last Month -";
  const url = `/images/icon-${title.replace(/\s+/g, "-").toLowerCase()}.svg`;
  return (
    <div className="card-container">
      <div
        className="top-card"
        style={{ backgroundColor: `var(${backgroundColor})` }}
      >
        <img src={url} alt="" />
      </div>
      <div className="card">
        <div className="title-container">
          <p>{title}</p>
          <button className="ellipsis">
            <img src="/images/icon-ellipsis.svg" alt="expand" />
          </button>
        </div>
        <p>{`${timeframes[currentTimeFrame].current}hrs`}</p>
        <p>{`${displayString}${timeframes[currentTimeFrame].previous}hrs`}</p>
      </div>
    </div>
  );
}
