import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="caption header-text">
                <h6>Welcome to lugx</h6>
                <h2>BEST GAMING SITE EVER!</h2>
                <p>
                  LUGX Gaming is free Bootstrap 5 HTML CSS website template for
                  your gaming websites. You can download and use this layout for
                  commercial purposes. Please tell your friends about
                  TemplateMo.
                </p>
                <div className="search-input">
                  <form id="search" action="#">
                    <input
                      type="text"
                      placeholder="Type Something"
                      id="searchText"
                      name="searchKeyword"
                    />
                    <button type="button">Search Now</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-2">
              <div className="right-image">
                <img src="assets/images/banner-image.jpg" alt="" />
                <span className="price">$22</span>
                <span className="offer">-40%</span>
              </div>
            </div>
          </div>
        </div>
      </div> {/* Missing closing tag for main-banner */}

      <div className="section most-played">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h6>TOP GAMES</h6>
                <h2>Most Played</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="main-button">
                <Link to="/games">View All</Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="item">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/top-game-01.jpg" alt="" />
                  </a>
                </div>
                <div className="down-content">
                  <span className="category">Adventure</span>
                  <h4>Warframe</h4>
                  <a href="product-details.html">Explore</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="item">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/top-game-02.jpg" alt="" />
                  </a>
                </div>
                <div className="down-content">
                  <span className="category">Adventure</span>
                  <h4>Assassin Creed</h4>
                  <a href="product-details.html">Explore</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="item">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/top-game-03.jpg" alt="" />
                  </a>
                </div>
                <div className="down-content">
                  <span className="category">Adventure</span>
                  <h4>Assassin Creed</h4>
                  <a href="product-details.html">Explore</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="item">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/top-game-04.jpg" alt="" />
                  </a>
                </div>
                <div className="down-content">
                  <span className="category">Adventure</span>
                  <h4>Assassin Creed</h4>
                  <a href="product-details.html">Explore</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="item">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/top-game-05.jpg" alt="" />
                  </a>
                </div>
                <div className="down-content">
                  <span className="category">Adventure</span>
                  <h4>Assassin Creed</h4>
                  <a href="product-details.html">Explore</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="item">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/top-game-06.jpg" alt="" />
                  </a>
                </div>
                <div className="down-content">
                  <span className="category">Adventure</span>
                  <h4>Assassin Creed</h4>
                  <a href="product-details.html">Explore</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
