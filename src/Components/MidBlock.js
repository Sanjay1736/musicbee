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
      <div className="Hot-topic">
        <div>
          <div>
            What's hot
            <i className="fa fa-free-code-camp" aria-hidden="true"></i>
          </div>
          <h3>Trending</h3>
        </div>
      </div>
      <div className="more">More</div>
      <div className="trending">
        <img
          className="trending-image"
          src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/hitman-3/5/5e/Dubai_Banner.png?width=1920"
        />
      </div>
      <div className="Text">
        <p>Artist</p>
        <h1>On Top</h1>
        <h1>of the world</h1>
        <button className="btn">Play</button>
        <button className="btn">Follow</button>
      </div>

      <div>
        <div>
          <div className="playlist-Header">
            <h3>My Playlist</h3>
            <h6>Show All</h6>
          </div>
          <table>
            <tr>
              <th>#</th>
              <th>TITTLE</th>
              <th>ARTIST</th>
              <th>TIME</th>
              <th>ALBUM</th>
            </tr>
            <tr>
              <td>01</td>
              <td>Priority</td>
              <td>Mos Def</td>
              <td>1:25</td>
              <td>The Ecstatic</td>
            </tr>
            <tr>
              <td>02</td>
              <td>Time Is Ticking Out</td>
              <td>The Cranberries</td>
              <td>2:59</td>
              <td>Wake Up and Smell Te...</td>
            </tr>
            <tr>
              <td>03</td>
              <td>One Minute More</td>
              <td>Capital Cities</td>
              <td>3:23</td>
              <td>In a Tidal Wave Of M..</td>
            </tr>
            <tr>
              <td>04</td>
              <td>时间在流逝(Kimi..</td>
              <td>Supercell</td>
              <td>5:50</td>
              <td>Sony Music Records Inc</td>
            </tr>
            <tr>
              <td>05</td>
              <td>时间在流逝</td>
              <td>CHiCO</td>
              <td>5:11</td>
              <td>HoneyWorks</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="controls">
        <div className="control-icons">
          <div>
            <button>
              <i class="fa-regular fa-heart"></i>
            </button>
            <button>
              <i class="fa-solid fa-music"></i>
            </button>
            <button>
              <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
            </button>
          </div>
          <div>
            <button>
              <i class="fa fa-retweet" aria-hidden="true"></i>
            </button>
            <button>
              <i class="fa fa-fast-backward" aria-hidden="true"></i>
            </button>
            <button>
              <i class="fa fa-pause" aria-hidden="true"></i>
            </button>
            <button>
              <i class="fa fa-fast-forward" aria-hidden="true"></i>
            </button>
            <button>
              <i class="fa fa-random" aria-hidden="true"></i>
            </button>
          </div>
          <div>
            <button>
              <i class="fa fa-volume-down" aria-hidden="true"></i>
            </button>
            <button>
              <i class="fa-solid fa-music"></i>
            </button>
            <button>
              <i class="fa fa-volume-up" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <audio className="audio" src="" controls />
      </div>
    </div>
  );
};
