import React from 'react'
import './LeftBar.css'

const LeftBar = () => {
    return (
      <>
        <div
          className="d-flex flex-column flex-shrink-0 p-3   Main-Container"
          style={{ width: 400, height: 900 }}
        >
          <div>
            <h1>Shortcuts</h1>
          </div>
          <div className="container">
            <div>
              <button type="button" className="btn">
                Chill Hits
              </button>
              <button type="button" className="btn ">
                Hop
              </button>
            </div>
            <div>
              <button type="button" className="btn ">
                Accoustic
              </button>
              <button type="button" className="btn ">
                Indie pop
              </button>
            </div>

            <button type="button" className="btn">
              Piano Blues
            </button>
            <button type="button" className="btn ">
              Jazz
            </button>
          </div>

          <div>
            <h3>Fav Artist</h3>
            <div className="artist">
              <img
                src="https://media.glamour.com/photos/60ccece1f5335d669e1776e3/master/pass/1317514337"
                alt
                width={60}
                height={60}
                className="rounded-circle me-2"
              />
              <div>
                <div>
                  <b>Tyalor Swift</b>
                  <p>196 Songs in Library</p>
                </div>
              </div>
              <div>
                <i class="fa-solid fa-ellipsis"></i>
              </div>
            </div>
            <div className="artist">
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/0x0.jpg?format=jpg&crop=4666,4663,x154,y651,safe&height=416&width=416&fit=bounds"
                alt
                width={60}
                height={60}
                className="rounded-circle me-2"
              />
              <div>
                <div>
                  <b>Kanye West</b>
                  <p>124 songs in Library</p>
                </div>
              </div>
              <div>
                <i class="fa-solid fa-ellipsis"></i>
              </div>
            </div>
            <div className="artist">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Drake_July_2016.jpg/640px-Drake_July_2016.jpg"
                alt
                width={60}
                height={60}
                className="rounded-circle me-2"
              />
              <div>
                <b>Draket</b>
                <p>50 songs in Library</p>
              </div>
              <div>
                <i class="fa-solid fa-ellipsis"></i>
              </div>
            </div>
            <div className="artist">
              <img
                src="https://c.ndtvimg.com/2020-03/ctpi4dd8_billie-eilish-body-shaming_625x300_11_March_20.jpg?im=Resize=(1230,900)"
                alt
                width={60}
                height={60}
                className="rounded-circle me-2"
              />
              <div>
                <div>
                  <b>Billie Eilish</b>
                  <p>15 songs in Library</p>
                </div>
              </div>
              <div>
                <i class="fa-solid fa-ellipsis"></i>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="inner-card">
              <img
                className="inner-image"
                src="https://i.ytimg.com/an/TF-BRiV7j4w/11138876084932090345_mq.jpg?v=611cd36d"
                alt="artist"
                width="250px"
              />
              <div></div>
              <strong>
                <h6>Torisetu</h6>
              </strong>
              <p>Kana Nishino</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default LeftBar