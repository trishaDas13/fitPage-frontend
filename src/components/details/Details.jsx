import React from "react";
import { Link, useParams } from "react-router-dom";
import { useStock } from "../../context/ContextAPI";
import { nanoid } from "nanoid";

const Details = () => {
  const { id } = useParams();
  const { stockData } = useStock();

  return (
    <div className="detailsContainer">
      <div className="details1">
        {id === "1" ? (
          <div className="container">
            <div className="header">
              <h4>{stockData[id - 1]?.name}</h4>
              <p style={{ color: `${stockData[id - 1]?.color}` }}>
                {stockData[id - 1]?.tag}
              </p>
            </div>
            <p className="content">{stockData[id - 1]?.criteria[0]?.text}</p>
          </div>
        ) : id === "2" ? (
          <div className="container">
            <div className="header">
              <h4>{stockData[id - 1]?.name}</h4>
              <p style={{ color: `${stockData[id - 1]?.color}` }}>
                {stockData[id - 1]?.tag}
              </p>
            </div>
            <div className="content">
              {stockData[id - 1]?.criteria.map((ele, i) => {
                return (
                  <div className="para" key={nanoid()}>
                    {i === stockData[id - 1]?.criteria.length - 1 ? (
                      <p key={nanoid()}>{ele.text}</p>
                    ) : (
                      <p key={nanoid()}>
                        {ele.text} <br /> <span>and</span>
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : id === "3" ? (
          <div className="container">
            <div className="header">
              <h4>{stockData[id - 1]?.name}</h4>
              <p style={{ color: `${stockData[id - 1]?.color}` }}>
                {stockData[id - 1]?.tag}
              </p>
            </div>
            <p className="content">
              {stockData[id - 1]?.criteria[0]?.text.split(" ").map((item, idx) => {
                if (item === "$1") {
                  return (
                    <Link to={`/values/${stockData[id - 1]?.id}/${idx}`} key={nanoid()}>
                      {stockData[id - 1]?.criteria[0]?.variable?.$1?.values[0] + " "}
                    </Link>
                  );
                } else {
                  return (<span key={nanoid()}>{item  + " "}</span>);
                }
              })}
            </p>
          </div>
        ) : id === "4" ? (
          <div className="container">
            <div className="header">
              <h4>{stockData[id - 1]?.name}</h4>
              <p style={{ color: `${stockData[id - 1]?.color}` }}>
                {stockData[id - 1]?.tag}
              </p>
            </div>
            <p className="content">{stockData[id - 1]?.criteria[0]?.text.split(" ").map((item, idx) => {
                if (item === "$1") {
                  return (
                    <Link to={`/values/${stockData[id - 1]?.id}/${idx}`} key={nanoid()}>
                      {stockData[id - 1]?.criteria[0]?.variable?.$1?.values[0] + " "}
                    </Link>
                  );
                } else {
                  return (<span key={nanoid()}>{item  + " "}</span>);
                }
              })}</p>
          </div>
        ) : (
          id === "5" && (
            <div className="container">
              <div className="header">
                <h4>{stockData[id - 1]?.name}</h4>
                <p style={{ color: `${stockData[id - 1]?.color}` }}>
                  {stockData[id - 1]?.tag}
                </p>
              </div>
              <div className="content">
                {stockData[id - 1]?.criteria.map((ele, i) => {
                  return (
                    <div className="para" key={nanoid()}>
                      {i === stockData[id - 1]?.criteria.length - 1 ? (
                        <p key={nanoid()}>{ele.text}</p>
                      ) : (
                        <p key={nanoid()}>
                          {ele.text} <br /> <span>and</span>
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Details;