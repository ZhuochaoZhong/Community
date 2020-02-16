import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Loginform.css"


import { Button, Form, Formgroup, Label, Input } from "react-bootstrap";
import { render } from "react-dom";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Loginpage">
        <div className="header">Welcome to Community</div>
        <div className="content">
          <form className="contentform">
            {/* <div class="form-group-gender">
              <label htmlFor="exampleFormControlSelect1">Gender:</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option selected="" value="Default"></option>
                <option>Male</option>
                <option>Female</option>
                <option>Rather not say</option>
              </select>
            </div> }

            {/* <div class="form-group-username">
              <div class="input-group-prepend">
                <span>@</span>
              </div>

              <input
                type="text"
                class="form-control"
                placeholder="Username"
              ></input>
            </div> */}

            <div className="form-group-name">
              <div className="input-group-prepend">
                <span>Person</span>
              </div>

              <input
                type="text"
                className="form-control"
                placeholder="First Name"
              ></input>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
              ></input>
            </div>
            <div className="form-group-email">
              <label htmlFor="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              ></input>
            </div>

            <div className="form-group-password">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              ></input>
            </div>

            <div className="form-group-question">
              <label htmlFor="exampleFormControlSelect1">Do you have a dog? </label>
              <select defaultValue="Default"className="form-control" id="exampleFormControlSelect1">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div className="form-group-dogbreed">
              <label htmlFor="exampleFormControlSelect1">Your's dog breed: </label>
              <select defaultValue="Default" className="form-control" id="exampleFormControlSelect1">
                <option value="gt">Golden Retriver</option>
                <option value="bt">Boston Terrier</option>
                <option value="bd">Bull Dog</option>
                <option value="mt">Maltese</option>
                <option value="sz">Shih Tzu</option>
                <option value="bg">Beagle</option>
                <option value="ch">Chihuahua</option>
                <option value="gs">German Shepherd</option>
                <option value="ot">Specify other breed below: </option>
              </select>
            </div>

            <div className="form-group-extrainformation">
              <label htmlFor="exampleFormControlTextarea1">
                Tell us more about your dog:
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <Button variant="primary" type="submit" className="btn btn-primary">
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
