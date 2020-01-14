import React, { Component } from "react";
import "./style.css";

export class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container_main">
          <img src={require("../../images/beach.jpg")} alt="Snow" />
          <div className="centered">
            <h2>The Making of a Legal Entrepreneur</h2>
          </div>
          <button className="centered_btn">REGISTER</button>
        </div>
        <div className="training_section">
          <div className="training_text">
            <h3>About Training</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <p>
              Sed felis eget velit aliquet sagittis id consectetur purus. Eu
              facilisis sed odio morbi quis commodo odio aenean. Suscipit
              adipiscing bibendum est ultricies integer. Diam donec adipiscing
            </p>
            <button>REGISTER NOW</button>
          </div>
          <div className="training_img">
            <img src={require("../../images/office.jpg")} alt="" />
          </div>
        </div>
        <div className="learn">
          <h3>What you'll Learn</h3>
          <div className="container-fluid">
            <div className="learn_items">
              <div className="item_one">
                <h4>
                  <span className="icon">❊</span> Inbound Marketing
                </h4>
                <h4>
                  <span className="icon">❊</span> Digital Crime and the Law
                </h4>
                <h4>
                  <span className="icon">❊</span> Lorem ipsum
                </h4>
              </div>
              <div className="item_two">
                <h4>
                  <span className="icon">❊</span> Lorem ipsum
                </h4>
                <h4>
                  <span className="icon">❊</span> Lorem ipsum
                </h4>
                <h4>
                  <span className="icon">❊</span> Lorem ipsum
                </h4>
              </div>
              <div className="item_three">
                <h4>
                  <span className="icon">❊</span> Lorem ipsum
                </h4>
                <h4>
                  <span className="icon">❊</span> Lorem ipsum
                </h4>
                <h4>
                  <span className="icon">❊</span> Lorem ipsum
                </h4>
              </div>
              <div className="item_four">
                <h4>
                  <span className="icon">❊</span> Lorem ipsum
                </h4>
                <h4>
                  <span className="icon">❊</span> Lorem ipsum
                </h4>
                <h4>
                  <span className="icon">❊</span> Lorem ipsum
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="facilitators">
          <h3>Facilitators</h3>
        </div>
        <div className="facilitator">
          <img src={require("../../images/astro.jpg")} alt="" />

          <div className="facilitator_text">
            <h5>Prince joel Esq.</h5>
            <div className="vl">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
        </div>
        <div className="facilitator_text_right">
          <div className="facilitator_right">
            <h5>Christopher E. moses</h5>

            <div className="vl_two">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
          <img src={require("../../images/officeworker.jpeg")} alt="" />
        </div>
        <div className="facilitator">
          <img src={require("../../images/newoffice.png")} alt="" />

          <div className="facilitator_text">
            <h5>Ubong Patrick</h5>
            <div className="vl">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
        </div>
        <div className="facilitator_text_right">
          <div className="facilitator_right">
            <h5>Tope Jay</h5>

            <div className="vl_two">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
          <img src={require("../../images/lastoffice.jpeg")} alt="" />
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
