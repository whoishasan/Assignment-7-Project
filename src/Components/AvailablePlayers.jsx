import { FaFlag } from "react-icons/fa";
export default function AvailablePlayers({ data, choosePlayer }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
      {data.map((playerdata, index) => {
        const { price, bowlingHand, position, country, name, image } =
          playerdata;
        return (
          <div
            key={index}
            className=" border border-t-gray-200 mt-4 shadow-xl shadow-purple-200  rounded-xl"
          >
            <figure className="">
              <img
                src={image}
                className="h-80 rounded-3xl p-5 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title ">
                <img
                  src={image}
                  className="w-10 h-10 rounded-full object-cover"
                  alt=""
                />
                {name}
              </h2>
              <div className="flex justify-between items-center mt-4 text-gray-600">
                <h2 className="flex justify-start gap-2 items-center">
                  <FaFlag></FaFlag> {country}
                </h2>
                <button className="px-4 py-2 border border-gray-400 rounded-lg">
                  {position}
                </button>
              </div>
              <div className="divider"></div>
              <p className="font-semibold mb-2">Rating</p>
              <div className="flex justify-between items-center gap-3">
                <h2 className="font-semibold">{bowlingHand}</h2>
                <h2 className="text-gray-400">{bowlingHand}</h2>
              </div>
              <div className="flex justify-between items-center gap-3 mt-2">
                <p className="font-bold text-black">
                  Price: $<span>{price}</span>
                </p>
                <button
                  className="btn bg-gradient-to-r from-purple-300 to-yellow-200"
                  onClick={() => choosePlayer(playerdata)}
                >
                  Choose Player
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
