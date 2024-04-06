import React from "react";
import { useStock } from "../../context/ContextAPI";
import { nanoid } from "nanoid";
import { HashRouter, Link } from "react-router-dom";
import "./landing.scss";
import Loder from "../../common/loader/Loder";

const Landing = () => {
  const { stockData } = useStock();

  return (
    <>
      {stockData.length > 0 ? (
        <main>
          <div className="stockContainer">
            {stockData.map((data, i) => {
              return (
                <>
                  <Link to={`/details/${data?.id}`} key={nanoid()}>
                    <h4>{data?.name}</h4>
                    <p style={{ color: `${data?.color}` }}>{data?.tag}</p>
                  </Link>
                  {i !== 4 && <hr />}
                </>
              );
            })}
          </div>
        </main>
      ) : (
        <Loder />
      )}
    </>
  );
};

export default Landing;
