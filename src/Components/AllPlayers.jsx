import React, { useState } from "react";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";
export default function AllPlayers({
  data,
  choosePlayer,
  aPlayer,
  deletePlayers,
}) {
  const [displayCard, setDisplayCard] = useState(true);
  const handleDisplayCard = (value) => {
    setDisplayCard(value);
  };
  return (
    <div className="my-5">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {displayCard
            ? "Available Players"
            : `Selected Player (${aPlayer.length}/6)`}
        </h2>
        <div className=" border border-gray-400 w-fit rounded-lg">
          <button
            onClick={() => handleDisplayCard(true)}
            className={`p-3  rounded-lg ${
              displayCard
                ? "bg-gradient-to-tr from-purple-500 to-yellow-400  text-white"
                : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleDisplayCard(false)}
            className={`p-3  rounded-lg ${
              displayCard
                ? ""
                : "bg-gradient-to-tr from-purple-500 to-yellow-400 text-white"
            }`}
          >
            Selected ({aPlayer.length})
          </button>
        </div>
      </div>
      <div className="my-6">
        {displayCard ? (
          <AvailablePlayers
            data={data}
            choosePlayer={choosePlayer}
          ></AvailablePlayers>
        ) : (
          <SelectedPlayers
            deletePlayers={deletePlayers}
            handleDisplayCard={handleDisplayCard}
            aPlayer={aPlayer}
          ></SelectedPlayers>
        )}
      </div>
    </div>
  );
}
