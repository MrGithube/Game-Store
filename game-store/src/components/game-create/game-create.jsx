import { useNavigate } from "react-router-dom";
import * as gameService from "../../services/gamesService";
import { Link } from "react-router-dom";

export default function GameCreate() {
  const navigate = useNavigate();

  const createGameSubmitHandler = async (e) => {
    e.preventDefault();

    const gameData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await gameService.create(gameData);

      navigate('/games');
      console.log(gameData);
      console.log("We made a game");
    } catch (err) {
      console.log("Error creating game:", err);
    }
  };

  return (
    <div>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Create Game</h3>
              <span className="breadcrumb">
                <Link to="/">Home</Link> &gt; Create Game
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-page section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="right-content">
                <div className="row">
                  <div className="col-lg-12"></div>
                  <div className="col-lg-12">
                    <form onSubmit={createGameSubmitHandler}>
                      <div className="row">
                        <div className="col-lg-6">
                          <fieldset>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Game Name..."
                              autoComplete="on"
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input
                              type="text"
                              name="category"
                              id="category"
                              placeholder="Game Category..."
                              autoComplete="on"
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input
                              type="number"
                              name="price"
                              id="price"
                              placeholder="Price..."
                              required
                              min="0"
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input
                              type="text"
                              name="tags"
                              id="tags"
                              placeholder="Tags..."
                              autoComplete="on"
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <textarea
                              name="summary"
                              id="summary"
                              placeholder="Summary here"
                            ></textarea>
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              className="orange-button"
                            >
                              Create Game
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
