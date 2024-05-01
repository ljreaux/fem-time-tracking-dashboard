import React from "react";

export default function MainCard({
  handleClick,
}: {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const userName = "Jeremy Robson";
  return (
    <div className="main-card">
      <div className="main-card-top">
        <img src="/images/image-jeremy.png" alt="profile-img" />
        <p>Report for</p>
        <p>{userName}</p>
      </div>
      <div className="main-card-bottom">
        <button value={"daily"} onClick={handleClick}>
          Daily
        </button>
        <button value={"weekly"} onClick={handleClick}>
          Weekly
        </button>
        <button value={"monthly"} onClick={handleClick}>
          Monthly
        </button>
      </div>
    </div>
  );
}
