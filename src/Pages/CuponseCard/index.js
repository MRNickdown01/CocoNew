import React, { useState } from "react";
import "./index.css";
import data from "./data.json";
import flight from "../../assets/images/flight.mp4";
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
          className="strip-image"
          style={{
            width: "100%",
            height: "100px",
            backgroundColor: "#FBDDDF",
            marginBottom: "1rem",
          }}
        >
          <div
            className="hero-text"
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/The_Himalaya_Drug_Company_logo.svg/1200px-The_Himalaya_Drug_Company_logo.svg.png"
              style={{ width: "20%" }}
            ></img>
          </div>
        </div>
        <div className="container">
          <div className="video-section" style={{ height: "25rem" }}>
            <a href="https://www.youtube.com/watch?v=OXGznpKZ_sA">
              <video loop muted autoPlay="autoplay" controls id="myVideo">
                <source src={flight} type="video/mp4"></source>
              </video>
            </a>
          </div>
        </div>
        <section className="py-5">
          <div className="container">
            <ul
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
            </ul>
            <div className="tab-content" id="pills-tabContent">
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
                      <div className="shopButton">{i.label}</div>
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
            className="input-mode"
            style={{
              marginBottom: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <input
              placeholder="Enter Subscriber Id"
              type="text"
              onChange={(e) => onInputChange("subscriber", e.target.value)}
              value={user.subscriber.value}
            />
            {user.subscriber.error ? (
              <div className="error" style={{ color: "#DC3545" }}>
                Enter correct subscriber code
              </div>
            ) : (
              ""
            )}
            <button
              type="button"
              class="btn btn-outline-info"
              onClick={() => onSubmit}
            >
              Submit
            </button>
          </div>
        </section>
        {/***
         * footer section  ***/}
        <section>
          <div
            className="social-icon"
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="circle-icon">
              <i
                className="fa-brands fa-instagram"
                style={{ fontSize: "20px" }}
              ></i>
            </span>
            <span className="circle-icon">
              <i
                className="fa-brands fa-twitter"
                style={{ fontSize: "20px" }}
              ></i>
            </span>
            <span className="circle-icon">
              <i
                className="fa-brands fa-linkedin-in"
                style={{ fontSize: "20px" }}
              ></i>
            </span>
          </div>
        </section>
      </section>
    </>
  );
};

export default CuponsCard;
