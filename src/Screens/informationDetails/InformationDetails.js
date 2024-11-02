import React from "react";
import "./InformationDetails.css";
import Buttons from "../../Components/Buttons/Buttons";
import { Link } from "react-router-dom";

const InformationDetails = () => {
  return (
    <div className="IsWrapper">
      <div className="IsContainer1">
        <div className="IsImage">
          <img
            src={require("../../Assets/Images/loginImage.png")}
            alt="Login Form"
          />
        </div>
        <div className="IsContents">
          <div className="IsContentsDiv">
            <h4>Enter your detail</h4>
            <div className="isflex">
              <h5>Name</h5>
              <div className="isInput">
                <input placeholder="First name"/>
                <input placeholder="Last name"/>
              </div>
            </div>
            <div className="isflex">
              <h5>Gender</h5>
              <div className="islabels">
                <label className="islabel">
                  <input type="radio" name="one" />
                  <h6>Male</h6>
                </label>
                <label className="islabel">
                  <input type="radio" name="one" />
                  <h6>Female</h6>
                </label>

                <label className="islabel">
                  <input type="radio" name="one" />
                  <h6>Other</h6>
                </label>
              </div>
            </div>
            <div className="isflex">
              <h5>Email address</h5>
              <input />
            </div>
            <div className="isflex">
              <Buttons label={"Signin"} />
              <Link className="islink">Skip now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationDetails;
