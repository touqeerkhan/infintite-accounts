import React from "react";
import { homeData } from "../../../data/home_data";
import { partnerData } from "../../../data/home_data";
import { openPopupWidget } from "react-calendly";
import { CgEnter } from "react-icons/cg";

const ScheduleEventButton = ({ url, prefill, pageSettings, utm }) => {
  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });

  return (
    <button
      className={"btn btn-services"}
      style={{ backgroundColor: "#ffc107" }}
      onClick={onClick}
    >
      {" "}
      Get a Free Qoute{" "}
    </button>
  );
};

export function Content() {
  return (
    <div className={"content-area mt-5"}>
      <h1>When you need more from your Accountant…</h1>
      <div className={"container"}>
        <div className={"row justify-content-center text-center p-5"}>
          {homeData.map((data) => (
            <div className={"col-lg-4 col-12 home-col-area"}>
              <img src={data.logo} style={{ color: "#009580" }} />
              <h3 className={"mt-2"}>{data.title}</h3>
              <p className={"mt-2"}>{data.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={"quotes-area"} style={{ backgroundColor: "#009580" }}>
        <h3>
          Are you looking for professional advice for your Business or your
          industry?
        </h3>
        <ScheduleEventButton
          url="https://calendly.com/steam117312/15min"
          prefill={{
            email: "",
            firstName: "",
            lastName: "",
            name: "",
          }}
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "00a2ff",
            textColor: "4d5055",
          }}
          utm={{
            utmCampaign: "Financial assistance",
            utmContent: "Finance",
            utmMedium: "Website",
            utmSource: "Web",
            utmTerm: "Spring",
          }}
        />
      </div>
      <div className={"partner-area"}>
        {/* <h1>Our Accreditations</h1> */}
        <p style={{ fontSize: 24, paddingTop: 20 }}>
          We have been working with some Fortune 500 clients
        </p>
        <div className={"partner-images"}>
          {partnerData.map((data) => (
            <img src={data} />
          ))}
        </div>
      </div>
      <div className={"home-divider-area"}></div>
      <div className={"home-services-area"}>
        <h1>Stress-free accountancy services</h1>
        <div className={"row text-center"}>
          <div className={"col-lg-2 col-md-6 col-6"}>
            <img src={"./images/service_1.png"} className={"img-fluid"} />
            <p style={{ marginTop: 20 }}>Book keeping</p>
          </div>
          <div className={"col-lg-1"}>
            <img
              src={"./images/down-arrow.png"}
              width={30}
              style={{ marginTop: 80 }}
            />
          </div>
          <div className={"col-lg-2 col-md-6 col-6"}>
            <img src={"./images/service_2.png"} className={"img-fluid"} />
            <p style={{ marginTop: 20 }}>Monthly management accounts</p>
          </div>
          <div className={"col-lg-1"}>
            <img
              src={"./images/down-arrow.png"}
              width={30}
              style={{ marginTop: 80 }}
            />
          </div>
          <div className={"col-lg-2 col-md-6 col-6"}>
            <img src={"./images/service_3.png"} className={"img-fluid"} />
            <p style={{ marginTop: 20 }}>Statutory end of year accounts</p>
          </div>
          <div className={"col-lg-1"}>
            <img
              src={"./images/down-arrow.png"}
              width={30}
              style={{ marginTop: 80 }}
            />
          </div>
          <div className={"col-lg-3 col-md-6 col-6"}>
            <img src={"./images/service_4.png"} className={"img-fluid"} />
            <p style={{ marginTop: 20 }}>Self assessment tax return</p>
          </div>
        </div>
      </div>
      <div className={"help_area"} style={{ backgroundColor: "#009580" }}>
        <div className={"container row m-0 text-center no-gutters"}>
          <div className={"col-lg-6 col-12 align-self-end"}>
            <img
              className={"img-fluid"}
              height={500}
              width={500}
              src={"./images/join_logo.svg"}
            />
          </div>
          <div className={"col-lg-6 col-12 p-5 help-col"}>
            <h1>How can we help ?</h1>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing Eli
                Condimentum dia
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing Eli
                Condimentum dia
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing Eli
                Condimentum dia
              </li>
            </ul>
            <button className={"btn btn-services mt-2"}> Contact Us </button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div
          className="row p-5 testimonial-area"
          style={{
            backgroundImage: 'url("./images/comma_logo.svg")',
            backgroundPosition: "top right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "20% 20%",
          }}
        >
          <h1 className="text-center" style={{ marginBottom: 40 }}>
            Testimonials
          </h1>
          <div className="col-lg-6 col-12">
            <div id="testimonial-slider" className="owl-carousel">
              <div className="testimonial">
                <div className="testimonial-content">
                  <p className={"heading"}>Incredible Experience</p>
                  <p className="description">
                    We had an incredible experience working with Landify and
                    were impressed They made such a big difference in only three
                    weeks. Our team is so Grateful for the wonderful
                    improvements they made and their ability to get Familiar
                    with the concept so quickly. It acted as a catalyst to take
                    our Design to the next level and get more eyes on our
                    product.
                  </p>
                </div>
                <div className="pic">
                  <img
                    src={"./images/user_logo.svg"}
                    className="rounded-circle"
                    alt="Cinque Terre"
                  />
                </div>
                <p className={"profile-name mb-0"}>Jane Cooper</p>
                <p className={"profile-info"}>CEO, ABC Corporation</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div id="testimonial-slider" className="owl-carousel">
              <div className="testimonial">
                <div className="testimonial-content">
                  <p className={"heading"}>
                    Dependable, Responsive, Professional Partner
                  </p>
                  <p className="description">
                    Fermin App has collaborated with Landify team for several
                    projects such As Photo Sharing Apps and Custom Social
                    Networking Apps. The Experience has been pleasant,
                    professional and exceeding our Expectations. The team is
                    always thinking beyond the current tasks & Helps us
                    formulate a vision and possibilities for future.
                  </p>
                </div>
                <div className="pic">
                  <img
                    src={"./images/user_logo.svg"}
                    className="rounded-circle"
                    alt="Cinque Terre"
                  />
                </div>
                <p className={"profile-name mb-0"}>Jane Cooper</p>
                <p className={"profile-info"}>CEO, ABC Corporation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"subscribe-area"} style={{ backgroundColor: "#009580" }}>
        <div className={"container row m-0 text-center align-items-center"}>
          <div className={"col-lg-6 col-12 p-5"}>
            <img
              src={"./images/subscr.svg"}
              className={"img-fluid"}
              height={300}
              width={300}
            />
          </div>
          <div className={"col-lg-6 col-12 sub-col"}>
            <h1>Subscribe to Our Newsletter </h1>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Work Email Here..."
                aria-label="work Email"
                aria-describedby="button-addon2"
              />
              <button className="btn btn-dark" type="button" id="button-addon2">
                Join the waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
