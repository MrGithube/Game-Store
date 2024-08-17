import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as gameService from '../../services/gamesService';
import GameItem from './listedGameItem/listedGameItem';

export default function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll()
      .then(result => setGames(result))
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Our Shop</h3>
              <span className="breadcrumb">
                <Link to="/">Home</Link> &gt; Our Shop
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="section trending">
        <div className="container">
          <ul className="trending-filter">
            <li>
              <a className="is_active" href="#!" data-filter="*">Show All</a>
            </li>
       
          </ul>

          <div className="row trending-box">
          {games.map(game => ( 
            <GameItem key={game._id} {...game}/> 
          ))}
          </div>

          <div className="row">
            <div className="col-lg-12">
              <ul className="pagination">
                <li><a href="#"> &lt; </a></li>
                <li><a href="#">1</a></li>
                <li><a className="is_active" href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#"> &gt; </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="col-lg-12">
            <p>
              Copyright © 2048 LUGX Gaming Company. All rights reserved. &nbsp;&nbsp;
              <a rel="nofollow" href="https://templatemo.com" target="_blank">Design: TemplateMo</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
