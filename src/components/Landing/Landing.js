import React, { Component } from "react";

import "./style.css";
import CustomNavbar from "../Navbar/CustomNavbar";
import firstsvg from "../../Images/landingsvg.svg";

export class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <CustomNavbar />
        <div className="main_landing container">
          <div className="row section_one">
            <div className="col-md-6 landing_text">
              <h1>A fresh approach to customer engagement</h1>
              <p>
                Delight your customers, every step of the way.
                <br /> You’ll know what we mean when you try our products.
              </p>
              <button className="first_btn">GET STARTED</button>
            </div>
            <div className="col-md-6 landing_svg">
              <img className="first_svg" src={firstsvg} alt="" />
            </div>
          </div>
        </div>
        <div className="section_two">
          <h2>Refreshing business software that your teams will love</h2>
          <p>
            All of our products are ready to go, easy to use and offer great
            value to any kind of business.
          </p>
          <div className="container">
            <div className="row product_cards">
              <div className="col-xs-12 col-sm-6 col-md-4 card_design">
                <div className="card product_card">
                  <div className="tag">
                    <span>CUSTOMER SUPPORT SOFTWARE</span>
                  </div>
                  <h4>freshdesk</h4>
                  <p>
                    Empower your support team to work together and resolve
                    customer issues faster
                  </p>
                  <button>START TRIAL</button>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 card_design">
                <div className="card product_card">
                  <div className="tag">
                    <span>CUSTOMER SUPPORT SOFTWARE</span>
                  </div>
                  <h4>freshchat</h4>
                  <p>
                    Empower your support team to work together and resolve
                    customer issues faster
                  </p>
                  <button>START TRIAL</button>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 card_design">
                <div className="card product_card">
                  <div className="tag">
                    <span>CUSTOMER SUPPORT SOFTWARE</span>
                  </div>
                  <h4>freshsales</h4>
                  <p>
                    Empower your support team to work together and resolve
                    customer issues faster
                  </p>
                  <button>START TRIAL</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row product_cards">
              <div className="col-xs-12 col-sm-6 col-md-4 card_design">
                <div className="card product_card">
                  <div className="tag">
                    <span>CUSTOMER SUPPORT SOFTWARE</span>
                  </div>
                  <h4>freshdesk</h4>
                  <p>
                    Empower your support team to work together and resolve
                    customer issues faster
                  </p>
                  <button>START TRIAL</button>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 card_design">
                <div className="card product_card">
                  <div className="tag">
                    <span>CUSTOMER SUPPORT SOFTWARE</span>
                  </div>
                  <h4>freshchat</h4>
                  <p>
                    Empower your support team to work together and resolve
                    customer issues faster
                  </p>
                  <button>START TRIAL</button>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 card_design">
                <div className="card product_card">
                  <div className="tag">
                    <span>CUSTOMER SUPPORT SOFTWARE</span>
                  </div>
                  <h4>freshsales</h4>
                  <p>
                    Empower your support team to work together and resolve
                    customer issues faster
                  </p>
                  <button>START TRIAL</button>
                </div>
              </div>
            </div>
          </div>
          <button className="view_products">VIEW ALL PRODUCTS</button>
        </div>
        <div className="section_three">
          <h2 className="text-center">
            <strong>The Freshworks Promise</strong>
          </h2>
          <p className="text-center">
            <strong>
              There are hundreds of vendors you deal with, who may promise you a
              thousand things.
              <br /> Wondering how we’re different?
            </strong>
          </p>
          <button className="read_more_btn">READ MORE</button>
        </div>
        <div className="section_four">
          <h2 className="text-center">
            Here’s what our customers have been saying about us
          </h2>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="card slide_card">
                  <div className="header_card">
                    <span className="quote1">
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                    <span>Name of User</span>
                    <span className="quote2">
                      <i class="fa fa-quote-right" aria-hidden="true"></i>
                    </span>
                  </div>
                  <p>
                    “One of my favorite things about Freshdesk is that it just
                    works - you don't have to be trained in using the software.
                    Everything is very intuitive.”
                  </p>
                  <hr />
                  <div className="d-flex">
                    <div className="user_img"></div>
                    <div className="user_section_text">
                      <h4>Agnes Ugwu</h4>
                      <p>Classroom Technology Manager</p>
                      <p>Lesley University</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="card slide_card">
                  <div className="header_card">
                    <span className="quote1">
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                    <span>Name of User</span>
                    <span className="quote2">
                      <i class="fa fa-quote-right" aria-hidden="true"></i>
                    </span>
                  </div>
                  <p>
                    “One of my favorite things about Freshdesk is that it just
                    works - you don't have to be trained in using the software.
                    Everything is very intuitive.”
                  </p>
                  <hr />
                  <div className="d-flex">
                    <div className="user_img"></div>
                    <div className="user_section_text">
                      <h4>Emeka Ofor</h4>
                      <p>Classroom Technology Manager</p>
                      <p>Lesley University</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="card slide_card">
                  <div className="header_card">
                    <span className="quote1">
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                    <span>Name of User</span>
                    <span className="quote2">
                      <i class="fa fa-quote-right" aria-hidden="true"></i>
                    </span>
                  </div>
                  <p>
                    “One of my favorite things about Freshdesk is that it just
                    works - you don't have to be trained in using the software.
                    Everything is very intuitive.”
                  </p>
                  <hr />
                  <div className="d-flex">
                    <div className="user_img"></div>
                    <div className="user_section_text">
                      <h4>Douglas Anderson</h4>
                      <p>Classroom Technology Manager</p>
                      <p>Lesley University</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <div className="slide_btn">
                <i class="fa fa-long-arrow-left"></i>
              </div>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <div className="slide_btn">
                <i class="fa fa-long-arrow-right"></i>
              </div>

              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="section_five">
          <h2 className="text-center">Inside Freshworks</h2>
          <p className="text-center">
            Get a sneak peek into some of the amazing things that happen behind
            the scenes at Freshworks.
          </p>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="card inside_card">
                  <div className="inside_card_img"></div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="card inside_card">
                  <div className="inside_card_img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </React.Fragment>
    );
  }
}

export default Landing;
