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
            height: "100px",
            backgroundColor: "#FBDDDF",
            marginBottom: "1rem",
          }}
        >
          <div className="hero-text my-2">
            <img
              src="https://assets.stickpng.com/images/585990234f6ae202fedf28cf.png"
              width="100%"
              height="90vh"
            ></img>
          </div>
        </div>
        <div className="container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/CgBRYn9avf0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <section className="py-4">
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
          <div className="container">
            <div
              className="subscirbe-footer"
              style={{
                backgroundColor: "#00FF31",
                borderRadius: "8px",
                height: "15rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <h4 style={{ color: "#9116B7" }}>Stay Updated</h4>
              <h6 style={{ color: "#9116B7" }}>
                Here the discription as to why should
              </h6>
              <div className="input-mode mt-2">
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
                <div className="btn-fil">
                  <button
                    type="button"
                    class="btn btn-info"
                    onClick={() => onSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/***
         * footer section  ***/}
        <section className="mb-4">
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