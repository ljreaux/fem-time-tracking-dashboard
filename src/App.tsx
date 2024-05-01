import Card from "./Card";
import data from "../data.json";
import { useState } from "react";
import MainCard from "./MainCard";

function App() {
  const colors = [
    "--clr-light-red-work",
    "--clr-soft-blue",
    "--clr-light-red-study",
    "--clr-lime-green",
    "--clr-violet",
    "--clr-soft-orange",
  ];
  const [currentData] = useState(data);
  const [currentTimeFrame, setCurrentTimeFrame] = useState<
    "daily" | "weekly" | "monthly"
  >("daily");
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentTimeFrame(
      e.currentTarget.value as "daily" | "weekly" | "monthly"
    );
  };
  return (
    <>
      <div className="page">
        <MainCard handleClick={handleClick} />
        {currentData.map((cardData, i) => (
          <Card
            {...cardData}
            currentTimeFrame={currentTimeFrame}
            backgroundColor={colors[i]}
          />
        ))}
      </div>
    </>
  );
}

export default App;
