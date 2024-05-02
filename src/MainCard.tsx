import React from "react";

export default function MainCard({
  handleClick,
  currentTimeFrame,
}: {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  currentTimeFrame: "daily" | "weekly" | "monthly";
}) {
  const userName = "Jeremy Robson";
  const timeFrames = ["Daily", "Weekly", "Monthly"];
  return (
    <div className="main-card">
      <div className="main-card-top">
        <img src="/images/image-jeremy.png" alt="profile-img" />
        <div>
          <p>Report for</p>
          <h2>{userName}</h2>
        </div>
      </div>
      <div className="main-card-bottom">
        {timeFrames.map((value) => {
          return (
            <button
              value={value.toLowerCase()}
              onClick={handleClick}
              style={
                currentTimeFrame === value.toLowerCase()
                  ? { color: "white" }
                  : undefined
              }
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}
