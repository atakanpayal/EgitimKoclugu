import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Cardcarousel.scss";
import onlinestudy from "../../img/onlinestudy.jpg";
import collage from "../../img/collagefriend.jpg";
import board from "../../img/board.jpg";
import chart from "../../img/chart2.jpg";
import together from "../../img/togethercomputer.jpg";
import { Link } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

function Cardcarousel() {
  return (
    <>
      <div className="card-carousel">
        <Carousel breakPoints={breakPoints}>
          <Link to="/egitimkoclugu" href="#egitimkoclugu">
            <Item>
              <div class="kard-list">
                <article class="kard">
                  <div class="kard-image">
                    <img
                      src={collage}
                      alt="An orange painted blue, cut in half laying on a blue background"
                    />
                  </div>
                  <div class="kard-header">
                    <a href="#">Eğitim Koçluğu</a>
                  </div>
                </article>
              </div>
            </Item>
          </Link>
          <Link to="/egitimkoclugu">
            <Item>
              <div class="kard-list">
                <article class="kard">
                  <div class="kard-image">
                    <img
                      src={onlinestudy}
                      alt="An orange painted blue, cut in half laying on a blue background"
                    />
                  </div>
                  <div class="kard-header">
                    <a href="#">Online Koçluk</a>
                  </div>
                </article>
              </div>
            </Item>
          </Link>
          <Link to="/egitimkoclugu">
            <Item>
              <div class="kard-list">
                <article class="kard">
                  <div class="kard-image">
                    <img
                      src={board}
                      alt="An orange painted blue, cut in half laying on a blue background"
                    />
                  </div>
                  <div class="kard-header">
                    <a href="#">Çalışma Programı</a>
                  </div>
                </article>
              </div>
            </Item>
          </Link>
          <Link to="/egitimkoclugu">
            <Item>
              <div class="kard-list">
                <article class="kard">
                  <div class="kard-image">
                    <img
                      src={chart}
                      alt="An orange painted blue, cut in half laying on a blue background"
                    />
                  </div>
                  <div class="kard-header">
                    <a href="#">Konu ve Soru Takip Çizelgesi</a>
                  </div>
                </article>
              </div>
            </Item>
          </Link>
          <Link to="/egitimkoclugu">
            <Item>
              <div class="kard-list">
                <article class="kard">
                  <div class="kard-image">
                    <img
                      src={together}
                      alt="An orange painted blue, cut in half laying on a blue background"
                    />
                  </div>
                  <div class="kard-header">
                    <a href="#">LGS-YKS-DGS Tercih Danışmanı</a>
                  </div>
                </article>
              </div>
            </Item>
          </Link>
        </Carousel>
      </div>
    </>
  );
}
export default Cardcarousel;
