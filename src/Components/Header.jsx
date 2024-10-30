import React from "react";
import banner from "../assets/banner.png";
import shadow from "../assets/shadow.png";
export default function Header({ handleAccountBalance }) {
  return (
    <div>
      <div
        className="hero mt-6 rounded-lg"
        style={{
          backgroundImage: `url(${shadow})`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-75 rounded-lg "></div>
        <div className="hero-content text-neutral-content text-center">
          <div>
            <div className="flex justify-center items-center mt-8">
              <img className="w-60" src={banner} alt="" />
            </div>
            <div>
              <h1 className="font-sora mb-5 text-4xl font-bold mt-10">
                Assemble Your Ultimate Dream 11 Cricket Team
              </h1>
              <p className="font-sora mb-4 font-bold">
                Beyond Boundaries Beyond Limits
              </p>
              <button
                onClick={() => handleAccountBalance(100000)}
                className="btn bg-gradient-to-tr from-purple-500 to-yellow-400 hover:bg-yellow-300 px-5 mb-8 mt-3"
              >
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
