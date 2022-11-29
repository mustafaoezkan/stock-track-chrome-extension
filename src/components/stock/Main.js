import React, { useEffect, useState } from "react";
import useStock from "../hooks/useStock";
import { STOCKS } from "../enums/myStocks";

function Main() {
  const myStocks = [
    STOCKS.FIRST,
    STOCKS.SECOND,
    STOCKS.THIRD,
    STOCKS.FOURTH,
    STOCKS.FIFTH
  ];
  const { getStock } = useStock();
  const [stock, setStock] = useState([]);
  const [isApiValid, setIsApiValid] = useState(false);

  useEffect(() => {
    getStock().then(res => {
      if (res.status === 200) {
        setStock(res.data.result);
        setIsApiValid(true);
      } else {
        setIsApiValid(false);
      }
    });
  }, []);

  return isApiValid
    ? <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
        {stock.filter(item => myStocks.includes(item.name)).map((item, index) =>
          <div key={index}>
            <div className="stat">
              <div className="stat-title">
                {item.name}
              </div>
              <div className="stat-value">
                {item.price}
              </div>
              <div
                className={
                  item.rate.toString().includes("-")
                    ? "stat-desc text-red-600 font-extrabold"
                    : "stat-desc text-green-600 font-extrabold"
                }
              >
                {item.rate}
              </div>
            </div>
          </div>
        )}
      </div>
    : <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
        <div className="stat">
          <div className="stat-title">API Key is not valid or expired.</div>
        </div>
      </div>;
}

export default Main;
