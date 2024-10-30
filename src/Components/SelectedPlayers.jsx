import React from "react";
import { MdDelete } from "react-icons/md";
export default function SelectedPlayers({
  aPlayer,
  handleDisplayCard,
  deletePlayers,
}) {
  return (
    <div>
      {aPlayer.map((singleplayer, index) => {
        const { image, name, position, id, price } = singleplayer;
        return (
          <div key={index}>
            <div className="flex justify-between my-4 border border-gray-500 items-center rounded-xl p-3">
              <div className="flex justify-between gap-3 items-center">
                <div>
                  <img
                    src={image}
                    alt=""
                    className="w-14 h-14 rounded-2xl object-cover"
                  />
                </div>
                <div className="ml-2">
                  <h2 className="font-bold p-1 ">{name}</h2>
                  <h3 className="text-gray-700">{position}</h3>
                  <h2 className="text-gray-700">{price}</h2>
                </div>
              </div>
              <div>
                <h3
                  className="text-red-600 font-bold cursor-pointer text-2xl mr-2"
                  onClick={() => deletePlayers(id)}
                >
                  <MdDelete />
                </h3>
              </div>
            </div>
          </div>
        );
      })}
      <div>
        <button
          onClick={() => handleDisplayCard(true)}
          className="btn my-4 bg-gradient-to-tr from-purple-500 to-yellow-400"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
}
