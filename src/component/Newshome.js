import React from "react";
import Newsb1 from "./img/NewsB1.jpg";
import Newsb3 from "./img/NewsB3.jpg";
import hsport from "./img/hsport.jpg";
import hbussi from "./img/hbuss.jpg";
import hhealth from "./img/hhealth.jpg";
import htech from "./img/htechnology.jpg";
import hent from "./img/hent.jpg";
import hspace from "./img/hspace.jpg";

import { Link } from "react-router-dom";

function Newshome() {
  return (
    <>
      <div className="d-flex mt-5 pt-2 ">
        <div className="Banner w-75" style={{ height: "35rem" }}>
          <div
            id="myCarousel"
            class="carousel slide mb-6 object-fit-contain"
            data-bs-ride="carousel"
            style={{ height: "35rem" }}
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                class=""
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                class="active"
                aria-current="true"
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                class=""
              ></button>
            </div>
            <div class="carousel-inner object-fit-fill">
              <div class="carousel-item object-fit-fill active">
                <img
                  className="object-fit-fill w-100 border rounded"
                  src={Newsb1}
                  alt=""
                  style={{ height: "35rem" }}
                />
                <div class="container">
                  <div class="carousel-caption text-start text-white">
                    <h1>Welcome to eNews</h1>
                    
                    <p>
                      <a class="btn btn-lg btn-primary" href="/general">
                        Sign up today
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div class="carousel-item">
                <img
                  className="object-fit-fill w-100 border rounded"
                  src={Newsb3}
                  alt=""
                  style={{ height: "35rem" }}
                />
                <div class="container">
                  <div class="carousel-caption ">
                    <h1>One more for good measure.</h1>
                    <p>
                     
                    </p>
                    <p>
                      <a class="btn btn-lg btn-primary" href="/entertainment">
                        Browse gallery
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

<div className="cards w-25">

        <div class=" p-2 text-bg-dark ">
          <div className="Nside p-5 ">
            <div className="Ntext p-4 rounded-2 border border-white">
              <h2>Social News</h2>
              <p>
                Unveil the latest social trends and hot topics as we bring you a
                daily dose of what's buzzing on social media.
              </p>
              <button class="btn btn-outline-light" type="button">
                <Link className="nav-link" to="/general">
                  Click Here
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div class="  p-2 text-bg-dark ">
          <div className="xyz">
            <div className=" p-4 rounded-2 border border-white">
              <p className="fs-5">
              Welcome to our news hub, your reliable source for timely updates and insightful stories. We strive to keep you informed, engaged, and empowered with the latest happenings from around the world. From breaking news to in-depth analyses, our commitment is to deliver accurate and compelling content that matters. Thank you for choosing us as your go-to destination for staying abreast of the ever-evolving news landscape. Together, let's navigate the world of current affairs and embark on a journey of knowledge and awareness.              </p>
            
            </div>
          </div>
        </div>
</div>
      </div>
     
     <hr />
     <h1 className="text-center">News You Can Explore</h1>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card" >
              <img src={hsport} class="card-img-top img-fluid " alt="..." />
              <div class="card-body">
                <h5 class="card-title display-5">Sports</h5>
                <p class="card-text">
                Welcome to our Sports News section, your go-to destination for the latest updates, thrilling highlights, and in-depth analyses from the dynamic world of sports.
                </p>
                <a href="/sports" class="btn btn-primary">
                 Explore Now
                </a>
              </div>{" "}
            </div>
          </div>
          <div className="col-md-4">
          <div className="card" >
              <img src={hbussi} class="card-img-top img-fluid " alt="..." />
              <div class="card-body">
                <h5 class="card-title display-5">Business</h5>
                <p class="card-text">
                Step into the Business News realm, your premier source for the latest developments, market trends, and strategic insights in the business landscape.
                </p>
                <a href="/business" class="btn btn-primary">
                Explore Now                </a>
              </div>{" "}
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" >
              <img src={htech} class="card-img-top img-fluid" alt="..." />
              <div class="card-body">
                <h5 class="card-title display-5">Technology</h5>
                <p class="card-text">
                Uncover the future as we explore the ever-evolving world of technology, delivering news on the latest gadgets, software developments, and advancements in artificial intelligence.                 </p>
                <a href="/technology" class="btn btn-primary">
                Explore Now
                </a>
              </div>{" "}
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" >
              <img src={hhealth} class="card-img-top img-fluid" alt="..." />
              <div class="card-body">
                <h5 class="card-title display-5">Health</h5>
                <p class="card-text">
                Embark on a journey to well-being with our Health News section, a dedicated space for the latest updates, expert insights, and practical tips to nurture your physical and mental health.                </p>
                <a href="/health" class="btn btn-primary">
                Explore Now
                </a>
              </div>{" "}
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" >
              <img src={hent} class="card-img-top img-fluid" alt="..." />
              <div class="card-body">
                <h5 class="card-title display-5">Entertainment</h5>
                <p class="card-text">
                Embark on a journey to well-being with our Health News section, a dedicated space for the latest updates, expert insights, and practical tips to nurture your physical and mental health.                </p>
                <a href="/entertainment" class="btn btn-primary">
                Explore Now
                </a>
              </div>{" "}
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" >
              <img src={hspace} class="card-img-top img-fluid" alt="..." />
              <div class="card-body">
                <h5 class="card-title display-5">Space</h5>
                <p class="card-text">
                Embark on a journey to well-being with our Health News section, a dedicated space for the latest updates, expert insights, and practical tips to nurture your physical and mental health.                </p>
                <a href="/science" class="btn btn-primary">
                Explore Now
                </a>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newshome;
