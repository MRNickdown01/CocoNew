import React, { useState } from "react";
import "./index.css";
import data from "./data.json";
import tree from "../../assets/images/tree.png";
import youtube from "../../assets/images/youtube.png";
import earth from "../../assets/images/earth.png";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";
const CuponsCard = (props) => {
  let BrandCupon = data.brandCupons;
  console.log(BrandCupon);

  const [user, setUser] = useState({
    subscriber: {
      value: "",
      error: false,
    },
  });

  const onInputChange = (id, value) => {
    let _user = { ...user };
    _user[id].value = value;
    _user[id].error = false;
  };

  const isRequired = (required) => {
    let requiredRegex = /^[\s\t\r\n]*\S+/;
    return requiredRegex.test(required);
  };

  const onSubmit = () => {
    let userObjectHasError = false;
    let _user = { ...user };
    Object.keys(user).forEach((key) => {
      if (key === "subsciber") {
        let hasError = !isRequired(_user[key].value);
        _user[key].error = !isRequired(_user[key].error);
        if (hasError) {
          userObjectHasError = true;
        }
      }
    });
    if (!userObjectHasError) {
    }
    setUser(_user);
  };
  return (
    <>
      <section>
        <div
          className="strip-image container col-lg-8 col-sm-12"
          style={{
            height: "100px",
            marginTop: "2rem",
            textAlign: "start",
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            {/* <img src={logo} width="100%" height="90vh"></img> */}
            <h1
              style={{
                lineHeight: "2rem",
                fontWeight: "800",
                fontSize: "2.2rem",
              }}
            >
              Get 15% off & a{" "}
              <img
                src={tree}
                width="45px"
                style={{ paddingBottom: "17px" }}
              ></img>{" "}
              just use our coupon
            </h1>
          </div>
          <div
            style={{
              textAlign: "start",
              margin: "2rem 0px",
              display: "flex",
              columnGap: "10px",
            }}
          >
            <h4>Watch how it works</h4>
            <img src={youtube} alt="thumbmail" width="50" height="30"></img>
          </div>
        </div>

        {/* video section */}

        {/* <section>
          <div>
            <iframe
              className="iframe-video"
              src="https://www.youtube.com/embed/CgBRYn9avf0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </section> */}

        {/*** *cupons code section */}

        <section style={{ marginTop: "100px", marginBottom: "80px" }}>
          <div className="container col-lg-8 col-sm-10">
            {/* <ul
              className="nav nav-pills mb-3"
              id="pills-tab"
              role="tablist"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <button
                type="button"
                className="segment btn btn-outline-danger active"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="false"
              >
                Men
              </button>
              <button
                type="button"
                className="segment btn btn-outline-danger"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Women
              </button>
              <button
                type="button"
                className="segment btn btn-outline-danger"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Food
              </button>
            </ul> */}
            <div
              className="tab-content"
              id="pills-tabContent"
              style={{ marginTop: "60px" }}
            >
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabindex="0"
              >
                <div className="allButton">
                  {BrandCupon.map((i, id) => (
                    <div
                      className="buttonCard animate__animated animate__zoomIn"
                      key={id}
                    >
                      <img src={i.image} className="" />
                      <div className="shopButton">
                        {i.label}
                        <img src={tree} width="15px"></img>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabindex="0"
              >
                <div className="allButton ">
                  {BrandCupon.map((i, id) => (
                    <div
                      className="buttonCard animate__animated animate__zoomIn"
                      key={id}
                    >
                      <img src={i.image} />
                      <div className="shopButton">{i.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabindex="0"
              >
                <div className="allButton ">
                  {BrandCupon.map((i, id) => (
                    <div
                      className="buttonCard animate__animated animate__zoomIn"
                      key={id}
                    >
                      <img src={i.image} />
                      <div className="shopButton">{i.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ***
      Offer section
       */}

        <section>
          <div
            className="subscirbe-footer container-fluid"
            style={{
              backgroundColor: "#F0F4FF",
              height: "100%",
              padding: "1.8rem",
            }}
          >
            <h4
              style={{
                color: "#000",
                fontSize: "1.7rem",
                letterSpacing: "1px",
                fontWeight: "bold",
                lineHeight: "2.4rem",
              }}
            >
              We've got 300+ brands in the pipeline
            </h4>
            <h6
              style={{
                color: "#000",
                fontSize: "18px",
                marginBottom: "15px",
                marginTop: "1.2rem",
                fontWeight: "300",
              }}
            >
              Stay updated via Email
            </h6>

            <form
              action=""
              style={{ marginBottom: "10px" }}
              className="input-fill-form"
            >
              <fieldset class="fieldInput">
                <input
                  class="form-input"
                  placeholder="Enter Subscriber Id"
                  type="text"
                  onChange={(e) => onInputChange("subscriber", e.target.value)}
                  value={user.subscriber.value}
                />
              </fieldset>
              <button type="submit" class="form-submit" onClick={onSubmit}>
                Submit
              </button>
            </form>
            <hr style={{ color: "rgb(175 175 175)" }}></hr>
            <span>
              <h6
                style={{ color: "#000", fontSize: "18px", fontWeight: "300" }}
              >
                On Socials
              </h6>
            </span>
            <div
              className="social-icon"
              // style={{
              //   display: "flex",
              //   gap: "20px",
              //   marginTop: "1rem",
              // }}
            >
              <img src={instagram} height="25px" />
              <img src={twitter} height="25px" />

              <img src={youtube} height="25px" />
            </div>
            <hr style={{ color: "rgb(175 175 175)" }}></hr>
            <div style={{ paddingBottom: "2rem", paddingTop: "1rem" }}>
              <span className="iconfooter">
                <img src={earth} width="25px" />
                &nbsp; Earth Tag is a &nbsp;
                <img
                  src="https://s3-us-west-2.amazonaws.com/romilmeghani.com/romil.png"
                  width="25px"
                  height="20px"
                />
                &nbsp;
                <a href="">ROM</a> &nbsp; initiative
              </span>
            </div>
          </div>
        </section>

        {/***
         * footer section  ***/}

        {/* <section className="social-section" style={{ marginBottom: "60px" }}>
        
        </section> */}
      </section>
    </>
  );
};

export default CuponsCard;
