import React from "react";
import "./MidBlocks.css";
export const MidBlock = () => {
    return (
      <div className="main-container">
        <div className="inner-container">
          <div>
            <button className="arrow">
              <i class="fa-solid fa-arrow-left"></i>
            </button>
          </div>
          <div>
            <button className="arrow">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          {/* <i class="fa-solid fa-magnifying-glass"></i> */}
          <div>
            <input
              className="search"
              type="search"
              placeholder="Search for artist,Songs and ..."
            />
          </div>
        </div>
        <div>
          <div>
            What's hot
            <i className="fa fa-free-code-camp" aria-hidden="true"></i>
          </div>
          <h3>Trending</h3>
        </div>
        <div className="trending">
          <img
            className="trending-image"
            src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/hitman-3/5/5e/Dubai_Banner.png?width=1920"
          />
        </div>
        <div>
          <div>
            <h3>My Playlist</h3>
          </div>
        </div>
      </div>
    );
};
