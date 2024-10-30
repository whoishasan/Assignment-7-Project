import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Header from "./Header";
import AllPlayers from "./AllPlayers";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function AllFile() {
  const [coin, setCoin] = useState(0);

  const handleAccountBalance = (claimCoin) => {
    const recentBalance = coin + claimCoin;
    setCoin(recentBalance);
  };

  const [data, setData] = useState([]);

  const [aPlayer, setAplayer] = useState([]);

  const deletePlayers = (id) => {
    const deletePlayer = aPlayer.filter((player) => player.id !== id);
    setAplayer(deletePlayer);
    toast.success(`একজন ডিলিট করে ফেললেন!😒`, { position: "top-center" });
  };
  const choosePlayer = (playerData) => {
    const isExist = aPlayer.find((p) => p.id == playerData.id);
    const selectedPlayer = [...aPlayer, playerData];
    console.log(selectedPlayer);
    if (coin < playerData.price) {
      toast.error("আপনার কাছে তো এতগুলা টাকা নেই! 🫨");
      return false;
    } else if (isExist) {
      toast.error(`"${playerData.name}" কে আগেই একবার কিনে ফেলছেন 😎`, {
        position: "top-center",
      });
      return false;
    } else if (aPlayer.length >= 6) {
      toast.error("৬ জনের অধিক প্লেয়ার কিনতে পারবেন না! 😑", {
        position: "top-center",
      });
      return false;
    } else {
      setAplayer(selectedPlayer);
      toast(`"${playerData.name}" কে তো কিনে ফেললেন! 😎`);
      let playerPrice = coin - playerData.price;
      setCoin(playerPrice);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = "fake-data.json";
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="w-10/12 mx-auto mt-5">
        <div>
          <Nav balance={coin}></Nav>
        </div>
        <Header handleAccountBalance={handleAccountBalance}></Header>
        <AllPlayers
          deletePlayers={deletePlayers}
          aPlayer={aPlayer}
          data={data}
          choosePlayer={choosePlayer}
        ></AllPlayers>
        <Footer></Footer>
        <ToastContainer />
      </div>
    </div>
  );
}
