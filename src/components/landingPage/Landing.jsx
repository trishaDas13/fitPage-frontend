import React from 'react'
import { useStock } from '../../context/ContextAPI';
import {nanoid} from 'nanoid';
import { Link } from 'react-router-dom';

const Landing = () => {
  const {stockData} = useStock();

  return (
    <main>
      <div className="stockContainer">
      {
        stockData.map((data, i) => {
          return(
            <Link to={`/details/${data?.id}`} key={nanoid()}>
            <div className="stocks" >
              <h4>{data?.name}</h4>
              <p style={{color: `${data?.color}`}}>{data?.tag}</p>
            </div>
            </Link>
          );
        })
      }
      </div>
    </main>
  )
}

export default Landing