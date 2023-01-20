import React from "react";
import "./MidBlocks.css";
export const MidBlock = () => {
    return (
      <>
        <div className="main-container">
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
            <section>
                Hello
            </section>
      </>
    );
};
