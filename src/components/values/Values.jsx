import React from "react";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";
import { useStock } from "../../context/ContextAPI";

const Values = () => {
  const { val, idx } = useParams();
  console.log("val", val, "idx", idx);
  const { stockData } = useStock();

  return (
    <div className="values">
      {val === "3" && idx === "6" ? (
        stockData[val - 1]?.criteria[0]?.variable?.$1.values
          .slice()
          .sort((a, b) => b - a)
          .map((item) => <p key={nanoid()}>{item}</p>)
      ) : val === "4" && idx === "1" ? (
        <div className="params">
          <h4 className="heading"> {stockData[val - 1]?.name}</h4>
          <p>Set Parametes</p>
          <form action="">
            <label htmlFor="">Periods:</label>
            <input
              type="number"
              placeholder={
                stockData[val - 1]?.criteria[0]?.variable?.$1?.default_value
              }
            />
          </form>
        </div>
      ) : val === "4" && idx === "4" ? (
        stockData[val - 1]?.criteria[0]?.variable?.$2.values
          .slice()
          .sort((a, b) => a - b)
          .map((item) => <p key={nanoid()}>{item}</p>)
      ) : val === "5" && idx === "14" ? (
        stockData[val - 1]?.criteria[0]?.variable?.$1.values
          .slice()
          .sort((a, b) => a - b)
          .map((item) => <p key={nanoid()}>{item}</p>)
      ) : val === "5" && idx === "4" ? (
        stockData[val - 1]?.criteria[1]?.variable?.$2.values
          .slice()
          .sort((a, b) => a - b)
          .map((item) => <p key={nanoid()}>{item}</p>)
      ) : val === "5" && idx === "8" ? (
        stockData[val - 1]?.criteria[1]?.variable?.$3.values
          .slice()
          .sort((a, b) => {
            const isAInteger = Number.isInteger(a);
            const isBInteger = Number.isInteger(b);

            if (!isAInteger && !isBInteger) {
              return a - b;
            }

            if (isAInteger && !isBInteger) {
              return 1;
            }

            if (!isAInteger && isBInteger) {
              return -1;
            }

            return a - b;
          })
          .map((item) => <p key={nanoid()}>{item}</p>)
      ) : (
        val === "5" &&
        idx === "1" && (
          <div className="params">
            <h4 className="heading"> {stockData[val - 1]?.name}</h4>
            <p>Set Parametes</p>
            <form action="">
              <label htmlFor="">Periods:</label>
              <input
                type="number"
                placeholder={
                  stockData[val - 1]?.criteria[2]?.variable?.$4?.default_value
                }
              />
            </form>
          </div>
        )
      )}
    </div>
  );
};

export default Values;
