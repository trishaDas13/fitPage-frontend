import React from "react";
import { Link, useParams } from "react-router-dom";
import { useStock } from "../../context/ContextAPI";
import { nanoid } from "nanoid";
import './detail.scss';
import Lottie from "../../common/lottie/Lottie";

const Details = () => {
  const { id } = useParams();
  const { stockData } = useStock();

  return (
    <main>
      <div className="details">
        {id === "1" ? (
          <div className="container">
            <div className="header">
              <h4>{stockData[id - 1]?.name}</h4>
              <p style={{ color: `${stockData[id - 1]?.color}` }}>
                {stockData[id - 1]?.tag}
              </p>
            </div>
            <div className="content"><p>{stockData[id - 1]?.criteria[0]?.text}</p></div>
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
                        {ele.text} <span className="and">and</span>
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
            <div className="content">
              <p>
              {stockData[id - 1]?.criteria[0]?.text
                .split(" ")
                .map((item, idx) => {
                  if (item === "$1") {
                    return (
                      <Link
                        to={`/values/${stockData[id - 1]?.id}/${idx}`}
                        key={nanoid()}
                      >
                        {"(" +
                          stockData[id - 1]?.criteria[0]?.variable?.$1
                            ?.values[0] +
                          ") "}
                      </Link>
                    );
                  } else {
                    return <span key={nanoid()}>{item + " "}</span>;
                  }
                })}
              </p>
            </div>
          </div>
        ) : id === "4" ? (
          <div className="container">
            <div className="header">
              <h4>{stockData[id - 1]?.name}</h4>
              <p style={{ color: `${stockData[id - 1]?.color}` }}>
                {stockData[id - 1]?.tag}
              </p>
            </div>
            <div className="content">
              <p>
              {stockData[id - 1]?.criteria[0]?.text
                .split(" ")
                .map((item, idx) => {
                  if (item === "$1") {
                    return (
                      <Link
                        to={`/values/${stockData[id - 1]?.id}/${idx}`}
                        key={nanoid()}
                      >
                        {"(" +
                          stockData[id - 1]?.criteria[0]?.variable?.$1
                            ?.default_value +
                          ") "}
                      </Link>
                    );
                  } else if (item === "$2") {
                    return (
                      <Link
                        to={`/values/${stockData[id - 1]?.id}/${idx}`}
                        key={nanoid()}
                      >
                        {"(" +
                          stockData[id - 1]?.criteria[0]?.variable?.$2
                            ?.values[0] +
                          ") "}
                      </Link>
                    );
                  } else {
                    return <span key={nanoid()}>{item + " "}</span>;
                  }
                })}
              </p>
            </div>
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
                        <p key={nanoid()} className="last">
                          {ele.text.split(" ").map((item, idx) => {
                            if (item === "$4") {
                              return (
                                <Link
                                  to={`/values/${stockData[id - 1]?.id}/${idx}`}
                                  key={nanoid()}
                                >
                                  {"(" +
                                    stockData[id - 1]?.criteria[2]?.variable?.$4
                                      ?.default_value +
                                    ") "}
                                </Link>
                              );
                            } else {
                             return( <span key={nanoid()}>{item + " "}</span>)
                            }
                          })}
                        </p>
                      ) : (
                        <p key={nanoid()} className="last">
                          {ele.text.split(" ").map((item, idx)=>{
                            if(item === "$1"){
                              return (
                                <Link
                                  to={`/values/${stockData[id - 1]?.id}/${idx}`}
                                  key={nanoid()}
                                >
                                  {"(" +
                                    stockData[id - 1]?.criteria[0]?.variable?.$1
                                      ?.values[0] +
                                    ") "}
                                </Link>
                              );
                            }else if(item === "$2"){
                              return (
                                <Link
                                  to={`/values/${stockData[id - 1]?.id}/${idx}`}
                                  key={nanoid()}
                                >
                                  {"(" +
                                    stockData[id - 1]?.criteria[1]?.variable?.$2
                                      ?.values[0] +
                                    ") "}
                                </Link>
                              );
                            }else if(item === "$3"){
                              return (
                                <Link
                                  to={`/values/${stockData[id - 1]?.id}/${idx}`}
                                  key={nanoid()}
                                >
                                  {"(" +
                                    stockData[id - 1]?.criteria[1]?.variable?.$3
                                      ?.values[0] +
                                    ") "}
                                </Link>
                              );
                            }else{
                              return( <span key={nanoid()}>{item + " "}</span>)
                            }
                          })} <br /> <span className="and andlast">and</span>
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
      <Lottie/>
    </main>
  );
};

export default Details;
