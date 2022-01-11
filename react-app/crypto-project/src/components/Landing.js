import React, { useEffect, useState } from "react";

//API
import { getCoins } from "../services/api";

//Components
import Coin from "./common/Coin";
import Loader from "./Loader";

//Styles
import styles from "./Landing.module.css";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoins();
      setCoins(data);
    };

    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchedCoin = coins.filter((coin) =>
    coin.name.toUpperCase().includes(search.toUpperCase())
  );

  return (
    <div className={styles.Landing}>
      <input
        type="text"
        placeholder="Search Coin"
        value={search}
        onChange={searchHandler}
      />
      {coins.length ? (
        searchedCoin.map((coin) => (
          <Coin
            key={coin.id}
            symbol={coin.symbol}
            name={coin.name}
            image={coin.image}
            price={coin.current_price}
            marketCap={coin.market_cap}
            priceChange={coin.price_change_percentage_24h}
          />
        ))
      ) : (
        <Loader />
      )}
      {searchedCoin.length === 0 && search && (
        <h3>!هیچ مورد مشابهی یافت نشد</h3>
      )}
    </div>
  );
};

export default Landing;
