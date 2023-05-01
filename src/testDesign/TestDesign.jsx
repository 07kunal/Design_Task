import React from "react";
import { MdBed } from "react-icons/md";
import { FaBath, FaRegHeart } from "react-icons/fa";
function TestDesign() {
  return (
    <div class="container-fluid subDiv">
      <div className="row section_div">
        <div class=" col-md-3 img_house">
          <img
            src="https://house-market-eta.vercel.app/static/media/sellCategoryImage.c4d28ee7217d692d13fb.jpg"
            alt="House"
          />
          <div className="heartIcon">
            <FaRegHeart className="heart" />
          </div>
        </div>
        <div className="col-md-9 section_div1">
          <div className="d-flex  flex-md-row-reverse flex-lg-row align-items-center section_part1 ">
            <div class=" bd-highlight price_details">
              <div className="houseName">
                <div className="name">
                  <p className="capitalDesign" style={{ marginBottom: "0px" }}>
                    DETACHED HOUSE
                    <span style={{ marginLeft: "15px" }}>.5Y OLD</span>{" "}
                  </p>
                </div>
              </div>
              <div className="housePrice">
                <h3>$750,000</h3>
                <span>742 Evergreen Terrace</span>
              </div>
            </div>
            <div class="d-flex flex-lg-row flex-md-column flex-sm-reverse next_idea section_part1">
              <div class=" bd-highlight ownerShip">
                <p className="capitalDesign">REALTOR</p>
                <div className="owner">
                  <div className="ownerImg">
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                      alt="user_pic"
                      style={{
                        width: "100%",
                        height: "100%",
                        clipPath: "circle()",
                      }}
                    />
                  </div>
                  <div className="onwnerName">
                    <p style={{ marginBottom: "2px", marginLeft: "25px" }}>
                      Tiffany Heffner
                    </p>
                    <p style={{ marginBottom: "0px", marginLeft: "25px" }}>
                      (555) 555-4321
                    </p>
                  </div>
                </div>
              </div>
              <div class=" bd-highlight roomDetails ">
                <div className="bedRoom">
                  <p>
                    {" "}
                    <MdBed style={{ fontSize: "25px" }} className="icon" />
                    <span style={{ marginLeft: "15px" }}>3 Bedrooms</span>
                  </p>
                </div>
                <div className="showerRoom">
                  <p>
                    <FaBath style={{ fontSize: "25px" }} className="icon" />
                    <span style={{ marginLeft: "15px" }}>2 Bathrooms</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestDesign;
