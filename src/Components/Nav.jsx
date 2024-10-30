import React from "react";
import coin from "../assets/coin.png";
import logo from "../assets/logo.png";
export default function Nav({ balance }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <img src={logo} alt="" />
        </div>
        <div className="flex gap-8">
          <div className=" flex items-center">
            <ul className="flex gap-5 font-sora items-center">
              <li>Home</li>
              <li>Fixture</li>
              <li>Teams</li>
              <li>Schedules</li>
            </ul>
          </div>
          <div className="flex gap-3 border border-gray-400 border-opacity-40 px-3 py-2 rounded-lg ">
            <div className="flex gap-2">
              <span className="font-bold">{balance}</span>
              <span className="font-bold">Coin</span>
            </div>
            <div>
              <img className="w-7 " src={coin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
